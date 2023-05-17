import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { FetchHomescreenData } from '../data/api';



export default function Home({navigation}){
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchHomescreenData()
      .then((response) => {
        setData(response)
      })
  }, []);
  

    return(
        <View>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.titleapp}>Welcome to Spotisurf</Text>
            </View>
            <View style={styles.favorite}>
                <Text style={styles.subtitleapp}>Find your favorite surf spot</Text>
            </View>
            <SafeAreaView style={{backgroundColor:'#FFFA99'}} >
              
                {data && (
                  <FlatList
                    style={{marginBottom:300}}
                    data={data.records}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Item title={item.fields.Destination} subtitle={item.fields["Destination State/Country"]} picture={item.fields.Photos[0].url} onPress={() => navigation.navigate('Detail', { itemId: item.id })}/> }
                  />
                )}
              
            </SafeAreaView>    
        </View>
    )
}

const Item = ({title, subtitle, picture, onPress}) => (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.spotlist}>
     <Text style={styles.titlespot}>{title}</Text>
     <Text style={styles.titlespot}>{subtitle}</Text>
     <Image source={{uri:picture}} style={styles.picture} />
    </View>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor:'#00353F',
    
    },
    titleapp: {
      fontWeight: 'bold',
      fontSize:30,
      color:'#D46F4D'
    },
    subtitleapp: {
      fontWeight:'bold',
      fontSize:20,
      textDecorationLine:'underline',
      backgroundColor:'#FFBF66',
      color:'#00353F'
    },
    favorite: {
      backgroundColor:'#FFBF66',
      alignItems: 'center',
      paddingVertical: 20,
       

    },
    spotlist:{
        backgroundColor:'#FFBF66',
        alignItems: 'center',
        paddingVertical: 20,
        
      
    },
    titlespot:{
      fontStyle:'italic',
      fontWeight:900,
      fontSize: 15,   
      color:'#00353F',
      paddingBottom: 4
    },
    picture:{
      width:150,
      height:150,
      borderRadius:75,
  
    }
      
  
  });

  