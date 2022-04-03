import React from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ImageBackground, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
//import * as Location from 'expo-location';
import MapView from 'react-native-open-maps';
//import NumericInput from 'react-native-NumericInput';
import splash from '../assets/splash.png';

const Product = ({ }) => {

    return (
        <SafeAreaView style={styles.container}>
         
               <View style={styles.nav} >
               <Image source={splash} style={{ height: 50, width: 50, alignSelf:'center', }} />
               </View>
               <View style={{flexDirection:'row', alignSelf:'center', marginTop:'100%', height:'20%', width:'100%', alignItems:'center'}}>
               <TouchableOpacity style={styles.button}
              // onPress={() => navigation.navigate('Mainpage')}
               >
                <Text style={styles.text}>Product Inquiry</Text>
            </TouchableOpacity>     
            <TouchableOpacity style={styles.button2}
           // onPress={() => navigation.navigate('Mainpage')}
               >
                <Text style={styles.text}>Vendor Operations</Text>
            </TouchableOpacity> 
            </View>  

            <View style={{flexDirection:'row', alignSelf:'center', height:'20%',width:'100%', alignItems:'center'}}>
            <TouchableOpacity style={styles.button3}
             // onPress={() => navigation.navigate('Mainpage')}
               >
                <Text style={styles.text}>Organizational OPerations</Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.button4}
             // onPress={() => navigation.navigate('Mainpage')}
               >
                <Text style={styles.text}>Internal Operations</Text>
            </TouchableOpacity>   
            </View>
          
          
        </SafeAreaView>
    );
};

export default Product;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:'7%',
    //alignItems: 'center',
    //justifyContent: 'center',
    },
   button: {
        backgroundColor: '#db0925',
       alignItems:'center',
       width:'50%',
    },
   button2: {
        backgroundColor: '#eb4258',
        alignItems:'center',
        width:'50%',
    },
  button3: {
        backgroundColor: '#02d433',
        alignItems:'center',
        width:'50%',
    },
    button4: {
        backgroundColor: '#6af78b',
        alignItems:'center',
        width:'50%',
    },
    text: {
        fontSize:15,
        height:'100%',
        paddingTop:'25%',
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
