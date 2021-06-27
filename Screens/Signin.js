import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import splash from '../assets/splash.png';
import { firebase } from '../src/firebase/config';


const Signin = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSiginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.replace('DrawerNavigationRoutes', { user })
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }
    return (

        <View style={styles.container}>
            <Image source={splash} style={{ height: 100, width: 100 }} />
            <TextInput style={styles.input}
                placeholder="Enter email"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TouchableOpacity style={styles.button}
                onPress={() => onSiginPress()}>
                <Text>Signin</Text>
            </TouchableOpacity>

        </View>

    );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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

});
