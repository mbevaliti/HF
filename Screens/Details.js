import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import splash from '../assets/splash.png';

const Details = ({ }) => {
    return (
     <View  style={styles.container}>
        <Text>Buy Medicines</Text>
        </View>
    );
};

export default Details;

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
