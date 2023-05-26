import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image} from 'react-native';
import styles from '../styles/Homescreen.styles';
import { useState, useCallback } from 'react';
import {useForm, Controller} from 'react-hook-form';
import DropDownPicker from "react-native-dropdown-picker";

export default function Profilescreen() {
    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [gender, setGender] = useState([
        { label: "Surf", value: "surf" },
        { label: "Bodyboard", value: "bodyboard" },
        { label: "Longboard", value: "longboard" },
    ]);

    const onGenderOpen = useCallback(() => {
        setCompanyOpen(false);
      }, []);

    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        console.log(data, "data");
    };

    return (
        <View>
            <View style={styles.container}>
                    <StatusBar backgroundColor='#FFBF66' />
                    <Text style={styles.titleapp}>Spotisurf</Text>
            </View>
            <View>
                <Image  style={styles.picture}
                        source={require('../assets/la-reunion.png')}
                />
                <Text>Brice de Nice</Text>
                <Controller
                    name="speciality"
                    //defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownGender}>
                            <DropDownPicker
                            style={styles.dropdown}
                            open={genderOpen}
                            value={genderValue} //genderValue
                            items={gender}
                            setOpen={setGenderOpen}
                            setValue={setGenderValue}
                            setItems={setGender}
                            placeholder="Select your speciality"
                            placeholderStyle={styles.placeholderStyles}
                            onOpen={onGenderOpen}
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