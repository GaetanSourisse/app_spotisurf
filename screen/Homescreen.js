import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, Pressable} from 'react-native';
import { FetchHomescreenData } from '../data/api';



export default function Homescreen({navigation}){
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchHomescreenData()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error("An error occurred while fetching data: ", error);
      });
  }, []);
  

    return(
        <View>
            <View style={styles.container}>
                <StatusBar backgroundColor='#FFBF66' />
                <Text style={styles.titleapp}>Spotisurf</Text>
            </View>
            <View style={styles.favorite}>
                <Text style={styles.subtitleapp}>Explore the surf spots</Text>
            </View>
            <SafeAreaView style={styles.spotlist} >             
                {data && (
                  <FlatList
                    numColumns={2}                
                    data={data.records}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Item  title={item.fields.Destination} subtitle={item.fields["Destination State/Country"]} picture={item.fields.Photos[0].url} onPress={() => navigation.navigate('Detail', { itemId: item.id })}/>}
                  />
                )}
            </SafeAreaView>    
        </View>
    )
}

const Item = ({title, subtitle, picture, onPress}) => (
    <Pressable onPress={onPress}>
     <Text style={styles.titlespot}>{title}</Text>
     <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subtitlespot}>{subtitle}</Text>
     <Image source={{uri:picture}} style={styles.picture} />
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
      paddingVertical: 30,
      backgroundColor:'#00353F',
    
    },
    titleapp: {
      textAlign: 'center',
      marginTop: 15,
      fontWeight: 'bold',
      fontSize:30,
      color:'#D46F4D',
      
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
    spotlist: {
      backgroundColor:'#FFBF66',
      marginBottom:300,
      alignItems: 'center'
      
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
    titlespot: {
      fontStyle:'italic',
      fontWeight:900,
      fontSize: 15,   
      color:'#00353F',
      paddingBottom: 4,
      marginHorizontal: 10
    },
    subtitlespot: {
      fontStyle:'italic',
      fontWeight:900,
      fontSize: 12,   
      color:'#00353F',
      paddingBottom: 4,
      marginHorizontal: 10,
      width: 150
    },
    picture:{
      width:160,
      height:200,
      borderRadius:7,
      marginBottom: 20,
      marginHorizontal: 10
    }
      
  
  });

  