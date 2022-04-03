import React from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ImageBackground, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
//import * as Location from 'expo-location';
import MapView from 'react-native-open-maps';
//import NumericInput from 'react-native-NumericInput';
import splash from '../assets/splash.png';

const Mainpage = ({ }) => {

    return (
        <SafeAreaView style={styles.container}>
         
               <View style={styles.nav} >
               <Image source={splash} style={{ height: 50, width: 50, alignSelf:'center', }} />
               </View>
              
        </SafeAreaView>
    );
};

export default Mainpage;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:'10%',
    //alignItems: 'center',
    //justifyContent: 'center',
    },
    button: {
        backgroundColor: '#999594',
        alignItems: 'center',
        alignSelf:'center',
        marginTop:'70%',
        height:'10%',
        width:'75%',
    },
    button2: {
        backgroundColor: '#999594',
        alignItems: 'center',
        alignSelf:'center',
        marginTop:'5%',
        height:'10%',
        width:'75%',
    },
    button3: {
        backgroundColor: '#999594',
        alignItems: 'center',
        alignSelf:'center',
        marginTop:'5%',
        height:'10%',
        width:'75%',
    },
    text: {
        paddingLeft: 85,
        paddingRight: 85,
        paddingTop:20,
        fontSize:20,
    },
    txt: {
     alignSelf:'center',
     fontSize: 20,
    
    },
    nav: {
        backgroundColor:'#181c47',  
    },
      body: {
        backgroundColor:'#999594',
        height: '5%',
      },
});
