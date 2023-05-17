import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { FetchDetailscreenData } from '../data/api';
import {API_TOKEN} from '@env';
 

export default function Detail({route}) {
    const { itemId } = route.params;
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDetailscreenData = async () => {
          const apiKey = API_TOKEN;
          try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${apiKey}`);
      
            var requestOptions = {
              method: 'GET',
              headers: myHeaders
            };
      
            const response = await fetch(
              `https://api.airtable.com/v0/appxT9ln6ixuCb3o1/Surf%20Destinations/${itemId}`,
              requestOptions
            );
      
            const data = await response.json();
            
            return data;
          } catch (error) {
            console.error("An error occurred while retrieving data from the API: ", error);
            throw error;
          }
        };
      
        fetchDetailscreenData()
          .then((response) => {
            setData(response);
            console.log(response);
          })
          .catch((error) => {
            console.error("An error occurred while fetching data: ", error);
          });
      }, []);
    return (
         
            <View>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={styles.titleapp}>Spotisurf</Text>
                </View>
                {data && (
                    <View>
                        <Image  style={styles.picture}
                                source={{ uri: data.fields.Photos[0].url }}
                        />
                        <View style={styles.textdetail}>
                             <Text data={data} style={styles.titlespot}>{data.fields.Destination}</Text>
                             <Text style={styles.location}>{data.fields["Destination State/Country"]}</Text>
                             <Text style={styles.description}>Surf Break : {data.fields["Surf Break"]}</Text>
                             <Text style={styles.description}>Difficulty Level : {data.fields["Difficulty Level"]}/5</Text>
                             <Text style={styles.description}>Peak Surf Season Begins : {data.fields["Peak Surf Season Begins"]}</Text>
                             <Text style={styles.description}>Peak Surf Season Ends : {data.fields["Peak Surf Season Ends"]}</Text>
                             {/* <TouchableOpacity onPress={Linking.openURL(data.fields["Magic Seaweed Link"])}>
                                <Text style={styles.description}>Pour de plus amples informations: Magic Seaweed</Text>
                             </TouchableOpacity> */}
                        </View>
                    </View>
                )}
            </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor:'#00353F',
    
    },
    titleapp: {
      fontWeight: 'bold',
      fontSize: 30,
      color:'#D46F4D'
    },
    picture: {
        width: 400,
        height: 200
    },
    titlespot:{
        fontStyle:'italic',
        fontWeight: 900,
        fontSize: 30,
        paddingTop: 20,
        color:'#00353F',
        paddingBottom: 4
    },
    location: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#00353F',
        fontStyle:'italic',
    },
    description: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#00353F',
        fontStyle:'italic',
        paddingTop: 10,
        // paddingBottom: 100
    },
    textdetail: {
        paddingLeft: 10,
        backgroundColor:'#FFBF66'
    }
})