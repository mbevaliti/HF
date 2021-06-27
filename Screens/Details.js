import React from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ImageBackground, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
//import * as Location from 'expo-location';
import MapView from 'react-native-open-maps';
//import NumericInput from 'react-native-NumericInput';
//import { splash } from '../assets/splash';

const Details = ({ }) => {


    const onFindPress = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);
                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Card style={styles.Card}>
                    <Image style={styles.Image} source={require('../Image/logo.png')}>
                    </Image>
                    <TouchableOpacity style={styles.button}
                      onPress={() => onFindPress()}>
                        <Text>
                            Find
                        </Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.Card}>
                    <Image style={styles.Image} source={require('../Image/logo.png')}>
                    </Image>

                    <TouchableOpacity style={styles.button}
                        onPress={() => onFindPress()}>
                        <Text>
                            Find
                        </Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.Card}>
                    <Image style={styles.Image} source={require('../Image/logo.png')}>
                    </Image>
                    <TouchableOpacity style={styles.button}>
                        <Text>
                            Find
                        </Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.Card}>
                    <Image style={styles.Image} source={require('../Image/logo.png')}>
                    </Image>
                    <TouchableOpacity style={styles.button}>
                        <Text>
                            Find
                        </Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
        </SafeAreaView>
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
        width: 50,
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
    Card: {
        justifyContent: 'center',

    },
});
