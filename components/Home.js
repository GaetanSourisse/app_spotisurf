import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
import {API_TOKEN} from '@env';



export default function Home({navigation}){
  const [data, setData] = useState([]);

  // access data to airtable
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: API_TOKEN}).base('appxT9ln6ixuCb3o1');
  
  useEffect(() => {
    base('Surf Destinations').find('rec5aF9TjMjBicXCK', function(err, record) {
      if (err) { 
        return console.error(err)
      }else{
        setData(record);
        console.log('Retrieved', record);
      }
    });
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
                {data._rawJson && (
                  <View>
                    <Item title={data._rawJson.fields.Address} subtitle={data._rawJson.fields["Difficulty Level"]} picture={data._rawJson.fields.Photos[0].url}/>
                  </View>
                )}
            </SafeAreaView>    
        </View>
    )
}

const Item = ({title, subtitle, picture, onPress}) => (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.spotlist}>
     <Text style={styles.titlespot}>{title}</Text>
     <Text style={styles.titlespot}>Niveau de difficulté: {subtitle}/5</Text>
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

  