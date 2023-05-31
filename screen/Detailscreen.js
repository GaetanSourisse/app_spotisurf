import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import { FetchDetailscreenData } from '../data/api';
import MapView, { Marker } from 'react-native-maps';
import base64 from 'react-native-base64';
import styles from '../styles/Detailscreen.styles'

export default function Detailscreen({route}) {
    const { itemId } = route.params;
    const [data, setData] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      FetchDetailscreenData(route)
        .then((response) => {
          setData(response);
          //console.log(response);
          const geocodestr = base64.decode(response.fields["Geocode"]);
          // console.log(geocodestr);
          const geocode = JSON.parse(geocodestr)
          console.log(geocode)
          setCoordinates(geocode);
          //console.log(coordinates)
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
         
            <View >
                <View style={styles.container}>
                    <StatusBar backgroundColor='#FFBF66' />
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
                              <View style={styles.mapborder}>
                                <MapView style={styles.map}
                                          region={{
                                          latitude: coordinates.o.lat,
                                          longitude: coordinates.o.lng,
                                          latitudeDelta: 10,
                                          longitudeDelta: 10,
                                          }}
                                >
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



