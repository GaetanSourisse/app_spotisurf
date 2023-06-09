import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/SignInscreen.styles';

const SignIn = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        if (name === '' || email === '' || password === '') {
            alert("All fields are required");
            return;
        }
        await axios.post("http://localhost:8001/api/signin", { name, email, password });
        alert("Sign In Successful");
    };
    return (
        <View style={{ backgroundColor:'#FFBF66'}}>
             <View style={styles.header}>
                <StatusBar backgroundColor='#FFBF66' />
                <Text style={styles.titleapp}>Spotisurf</Text>
            </View>
            <KeyboardAwareScrollView contentCotainerStyle={styles.container}>
                <View style={{ marginVertical: 100}}>
                    <Text style={styles.signupText}>Sign In</Text>
                    <View style={{ marginHorizontal: 24 }}>
                        <Text style={{ fontSize: 16, color: '#00353F' }}>EMAIL</Text>
                        <TextInput style={styles.signupInput} value={email} onChangeText={text => setEmail(text)} autoCompleteType="email" keyboardType="email-address" />
                    </View>
                    <View style={{ marginHorizontal: 24 }}>
                        <Text style={{ fontSize: 16, color: '#00353F' }}>PASSWORD</Text>
                        <TextInput style={styles.signupInput} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} autoComplteType="password" />
                    </View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, textAlign: 'center', color: '#00353F' }}>Not yet registered? Sign Up</Text>
                    <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 10, marginBottom: 80, color: '#00353F' }}>Forgot Password?</Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}



export default SignIn