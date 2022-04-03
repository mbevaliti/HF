import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import splash from '../assets/splash.png';
import nexx from  '../Image/nexx.png';
import { firebase } from '../src/firebase/config';

const Homescreen = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Image source={splash} style={{ height: 100, width: 100 }} />
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Signup')} >
                <Text style={styles.Text}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Signin')}>
                <Text
                    style={styles.Text}>
                    Sign In
                </Text>
            </TouchableOpacity>


        </View>

    );
};

export default Homescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
});
