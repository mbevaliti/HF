import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
//import { splash } from '../assets/splash';

const Details = ({ }) => {
    return (
        <View style={styles.container}>
            <Card>
                <Image style={styles.Image} source={require('../Image/logo.png')} />
                <Text style={styles.text}>Painkillers</Text>
            </Card>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    // backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    //},
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
    text: {
        alignItems: 'center',
        paddingLeft: 85,
        paddingRight: 85,
    },
    Image: {
        width: 150,
        height: 150,
    },
});
