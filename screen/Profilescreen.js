import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';
import styles from '../styles/Profilescreen.styles';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DropDownPicker from "react-native-dropdown-picker";

export default function Profilescreen() {

    //states for the dropdown menu of sepciality
    const [specialityOpen, setSpecialityOpen] = useState(false);
    const [specialityValue, setSpecialityValue] = useState(null);
    const [speciality, setSpeciality] = useState([
        { label: "Surf", value: "surf" },
        { label: "Bodyboard", value: "bodyboard" },
        { label: "Longboard", value: "longboard" },
    ]);

    const { handleSubmit, control } = useForm();
  
      return (
        <View backgroundColor='#FFBF66' height='100%'>
            <View style={styles.container}>
                    <StatusBar backgroundColor='#FFBF66' />
                    <Text style={styles.titleapp}>Spotisurf</Text>
            </View>
            <View style={styles.framepicture}>
                <Image  style={styles.picture}
                        source={require('../assets/la-reunion.png')}
                />
                <Text style={styles.name}>Brice de Nice</Text>
            </View>
            <View style={styles.card}>
                    
                    <Controller
                        name="speciality"
                        control={control}
                        render={({ field: { onChange } }) => (
                            <View style={styles.dropdown}>
                                <Text style={styles.speciality}>Speciality :</Text>
                                <DropDownPicker
                                open={specialityOpen}
                                value={specialityValue}
                                items={speciality}
                                setOpen={setSpecialityOpen}
                                setValue={setSpecialityValue}
                                setItems={setSpeciality}
                                placeholder="Select your speciality"
                                onChangeValue={onChange}
                                style={{
                                    backgroundColor: "#00353F"
                                  }}
                                textStyle={{
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    color: '#D46F4D'
                                  }}
                                labelStyle={{
                                    fontWeight: "bold"
                                  }}
                                />
                            </View>
                        )}
                    />
                    <Text style={styles.favorite}>Favorite spots :</Text>
                    <View style={styles.addspot}>
                        <TouchableOpacity
                            onPress={() => Alert.alert('Spot recorded')}
                            style={styles.button}
                        >
                            <Text style={styles.textadd}>Add a spot</Text>
                        </TouchableOpacity>
                    </View>
                                   
            </View>
        </View>
    )
}