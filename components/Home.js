import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
import {API_TOKEN} from '@env';



export default function Home({navigation}){
  const [data, setData] = useState([]);

  // access data to airtbale
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: API_TOKEN}).base('appxT9ln6ixuCb3o1');
  
  useEffect(() => {
      base('Surf Destinations').select({
        view: 'Main View'
      }).firstPage(function(err, records) {
        if (err) { 
          console.error(err)
        }else{
          setData(records)
        };
      });
    },[])
  

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
                <FlatList
                  data={data}
                  //keyExtractor={({id}) => id}
                  renderItem={({item}) => (
                    <Item title={item.Address}/>
                    
                  )}
                />
                    
            </SafeAreaView>    
            
        </View>
    )
}

const Item = ({title, subtitle, picture, onPress}) => (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.spotlist}>
     <Text style={styles.titlespot}>{title}, {subtitle}</Text>
     <Image source={picture} style={styles.picture} />
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
        maxHeight: 700
      
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
      borderRadius:75
  
    }
      
  
  });

  