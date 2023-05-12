import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';
import {spots} from "../data/spots";
import {data} from "../data/spots.json";

export default function Detail({route}) {
    const { itemId } = route.params;
    return (
    <View>
        <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.titleapp}>Spotisurf</Text>
        </View>
        <Image  style={styles.picture}
                data={spots}
                source={spots[itemId].picture}
        />
        <View style={styles.textdetail}>
            <Text style={styles.titlespot}>{spots[itemId].name}</Text>
            <Text style={styles.location}>{spots[itemId].location}</Text>
            <Text style={styles.description}>{spots[itemId].description}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: 30,
      backgroundColor:'#00353F',
    
    },
    titleapp: {
      fontWeight: 'bold',
      fontSize: 30,
      color:'#D46F4D'
    },
    picture: {
        width: 400,
        height: 300
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
        paddingBottom: 100
    },
    textdetail: {
        paddingLeft: 10,
        backgroundColor:'#FFBF66'
    }
})