import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, Image, Pressable} from 'react-native';
import { FetchHomescreenData } from '../data/api';
import styles from '../styles/Homescreen.styles';



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



  