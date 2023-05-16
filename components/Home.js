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
    const arrRecords = [];
    base('Surf Destinations').select({
      fields: ["Destination", "Destination State/Country", "Photos"],
      view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.forEach(function(record) {
          arrRecords.push(record);
          //console.log('Retrieved', record);
      });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
  }, function done(err) {
      if (err) { 
        return console.error(err)
      }else{
        setData(arrRecords)
        console.log(data)
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
              
                {data && (
                  <FlatList
                    data={data}
                    keyExtractor={(item) => item.fields.id}
                    renderItem={({item}) => <Item title={item.fields.Destination} subtitle={item.fields["Destination State/Country"]} picture={item.fields.Photos[0].url}/> }
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

  