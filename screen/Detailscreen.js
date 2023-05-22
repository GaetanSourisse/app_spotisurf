import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import { FetchDetailscreenData } from '../data/api';
import MapView, { Marker } from 'react-native-maps';

 

export default function Detailscreen({route}) {
    const { itemId } = route.params;
    const [data, setData] = useState(null);

    useEffect(() => {
      FetchDetailscreenData(route)
        .then((response) => {
          setData(response);
          console.log(response);
          
        })
        .catch((error) => {
          console.error("An error occurred while fetching data: ", error);
        });
    }, [itemId]);

    function Link(){
      Linking.openURL(data.fields["Magic Seaweed Link"])
    }
    
    // function Decode(){
    //   const geocode = "eyJpIjoiUGlwZWxpbmUsIE9haHUsIEhhd2FpaSIsIm8iOnsic3RhdHVzIjoiT0siLCJmb3JtYXR0ZWRBZGRyZXNzIjoiRWh1a2FpIEJlYWNoIFBhcmssIEhhbGVpd2EsIEhJIDk2NzEyLCBVbml0ZWQgU3RhdGVzIiwibGF0IjoyMS42NjUwNTYyLCJsbmciOi0xNTguMDUxMjA0Njk5OTk5OTd9LCJlIjoxNTM1MzA3MDE5OTE1fQ==";
    //   const buffer = new Buffer(geocode, 'base64');
    //   const decodedData = buffer.toString('utf-8');
    //   const coordinates = JSON.parse(decodedData);

    //   console.log(coordinates);
    // }

    // Decode()
    
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
                             <TouchableOpacity onPress={Link}>
                                <Text style={styles.description}>More informations : Magic Seaweed</Text>
                             </TouchableOpacity>
                             <MapView style={styles.map}
                                      initialRegion={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                      }}>
                              <Marker
                                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                                title="Marker Title"
                                description="Marker Description"/>
                             </MapView> 
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
        paddingVertical: 5,
        
    },
    textdetail: {
        paddingHorizontal: 10,
        backgroundColor:'#FFBF66'
    },
 
    map: {
      width: 370,
      height: 250,
    },    
    
})