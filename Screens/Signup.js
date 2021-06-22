import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import splash from '../assets/splash.png';
import { useState } from 'react';
import { firebase } from '../src/firebase/config';


const Signup = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSignupPress = () => {
        if (password !== confirmPassword) {
            alert("passwords dont match")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((Response) => {
                const uid = Response.user.uid
                const data = {
                    id: uid,
                    email,
                    name,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Signin', { user: data })
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });

    }
    return (

        <View style={styles.container}>
            <Image source={splash} style={{ height: 100, width: 100 }} />
            <TextInput style={styles.input}
                placeholder="Enter Name"
                keyboardType="default"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput style={styles.input}
                placeholder="Enter email"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput style={styles.input}
                placeholder="Enter Password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TextInput style={styles.input}
                placeholder="Confirm Password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
            />

            <TouchableOpacity style={styles.button}
                onPress={() => onSignupPress()}>
                <Text style={styles.Text}>Sign Up</Text>
            </TouchableOpacity>

        </View>

    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#999594',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 50,
        height: 25,
        width: 150,
        color: 'black',

    },
    input: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        width: 300,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
});
