import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import { FetchDetailscreenData } from '../data/api';
import MapView, { Marker } from 'react-native-maps';
import base64 from 'react-native-base64';


 

export default function Detailscreen({route}) {
    const { itemId } = route.params;
    const [data, setData] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      FetchDetailscreenData(route)
        .then((response) => {
          setData(response);
          // console.log(response);
          const geocodestr = base64.decode(response.fields["Geocode"]);
          // console.log(geocodestr);
          const geocode = JSON.parse(geocodestr)
          setCoordinates(geocode);
          // console.log(coordinates)
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("An error occurred while fetching data: ", error);
          setIsLoading(false);
        });
    }, [itemId]);

    function Link(){
      Linking.openURL(data.fields["Magic Seaweed Link"])
    }
    
    
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
                            {isLoading ? (
                              
                              <Text>Loading...</Text>
                            ) : (
                              <View>
                              <MapView style={styles.map}
                                        initialRegion={{
                                        latitude: coordinates.o.lat,
                                        longitude: coordinates.o.lng,
                                        latitudeDelta: 0.5,
                                        longitudeDelta: 0.01,
                                      }}>
                                <Marker
                                  coordinate={{ latitude: coordinates.o.lat, longitude: coordinates.o.lng }}
                                  title= {coordinates.i}
                                  />
                              </MapView>
                              </View>
                            )}
                             
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