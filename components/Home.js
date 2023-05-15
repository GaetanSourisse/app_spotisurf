import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
import {spots} from "../data/spots";
import {data} from "../data/spots.json"

export default function Home({navigation}){
    const data = require('../data/spots.json');
    console.log(data.records[0].SurfBreak)
    const [imageUrl, setImageUrl] = useState(null);
 
    return(
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.titleapp}>Welcome to Spotisurf</Text>
            </View>
            <View style={styles.favorite}>
                <Text style={styles.subtitleapp}>Find your favorite surf spot</Text>
            </View>
            <SafeAreaView style={{backgroundColor:'#FFFA99'}} >
                {/* <FlatList
                    //via une bdd en dur spot.js
                    keyExtractor={(item) => item.id}
                    data={spots}
                    renderItem={({item}) => <Item title={item.name} subtitle={item.location} picture={item.picture} onPress={() => navigation.navigate('Detail', { itemId: item.id })}/>}
                />    */}
                  
                    
                    Via un fichier json
                    <View>
                        {data.records.map((item) => (
                            <View key={item.id}>
                                <Text >{item.SurfBreak} ({item.Address})</Text>
                                { useEffect(() => {
                                    const imageUrl = item.Photos;
                                    fetch(item.Photos)
                                        .then(response => console.log(response.blob()))
                                        .then(blob => {
                                            const localUrl = URL.createObjectURL(blob);
                                            setImageUrl(localUrl);})
                                        .catch(error => console.error(error))}
                                }, []);
                                };
                                <Image source={{uri: item.Photos}} style={{width: 400, height: 400}}/>
                    </View>
                        ))}
                    
            </SafeAreaView>    
            
        </ScrollView>
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

  