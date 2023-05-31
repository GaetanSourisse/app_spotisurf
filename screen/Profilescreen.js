import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image} from 'react-native';
import styles from '../styles/Profilescreen.styles';
import { useState } from 'react';
import {useForm, Controller} from 'react-hook-form';
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
    const onSubmit = (data) => {
        console.log(data, "data");
    };

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
            </View>
            <View style={styles.card}>
                    <Text style={styles.name}>Brice de Nice</Text>
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
                                placeholderStyle={styles.placeholderStyles}
                                onChangeValue={onChange}
                                zIndex={3000}
                                zIndexInverse={1000}
                                />
                            </View>
                        )}
                    />
                
            </View>
        </View>
    )
}