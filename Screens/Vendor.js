import React from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ImageBackground, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
//import * as Location from 'expo-location';
import MapView from 'react-native-open-maps';
//import NumericInput from 'react-native-NumericInput';
import splash from '../assets/splash.png';

const Vendor = ({navigation}) => {

    return (
       
            <SafeAreaView style={styles.container}>
             
                   <View style={styles.nav} >
                   <Image source={splash} style={{ height: 50, width: 50, alignSelf:'center', }} />
                   </View>
                   <View style={{flexDirection:'column', alignSelf:'center', marginTop:'100%', height:'20%', width:'100%', alignItems:'center'}}>
                   <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate('Purchaseorder')}
                   >
                    <Text style={styles.text}>Purchase Order</Text>
                </TouchableOpacity>     
                <TouchableOpacity style={styles.button3}
                 onPress={() => navigation.navigate('Order')}
                   >
                    <Text style={styles.text}>View Purchase Order</Text>
                </TouchableOpacity>   
                </View>  
            </SafeAreaView>
        );
};

export default Vendor;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:'7%',
    //alignItems: 'center',
    //justifyContent: 'center',
    },
    button: {
        backgroundColor:'#eb4258',
       alignItems:'center',
       width:'100%',
    },
 
  button3: {
        backgroundColor:'#eb4258',
        alignItems:'center',
        width:'100%',
        marginTop:'2%',
    },
   
    text: {
        fontSize:20,
        height:'100%',
        paddingTop:'15%',
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
