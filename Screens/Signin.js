import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Signin = ({ }) => {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.Text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>Sign In</Text>
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
