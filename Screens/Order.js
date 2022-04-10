import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ImageBackground, Image, ScrollView, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { Card } from 'react-native-elements';
//import * as Location from 'expo-location';
//import MapView from 'react-native-open-maps';
//import NumericInput from 'react-native-NumericInput';
import splash from '../assets/splash.png';
import { firebase } from '../src/firebase/config';

const Order = ({navigation}) => {

const [Purchaseorder, setPurchaseOrder]= useState([]);

const fetchOrder = async()=>{
    const response = firebase.firestore().collection('Purchaseorder');
    const data = await response.get();
    
    data.docs.forEach(item=>{
        console.log(item.data())
        setPurchaseOrder(Purchaseorder=>[...Purchaseorder,item.data()])
    })
}

useEffect(()=>{
   
    fetchOrder();
}, [])

    return (
       
            <SafeAreaView style={styles.container}> 
             <ScrollView> 
               <View style={styles.nav} >
               <Image source={splash} style={{ height: 50, width: 50, alignSelf:'center', }} />
               </View>
               <View style={styles.body}>
               <Text style={styles.txt}>View Purchase Order</Text>
               </View>
               {Purchaseorder && Purchaseorder.map((Purchaseorder, index)=> <Good key={index} Purchaseorder={Purchaseorder}/>)}
            
               </ScrollView>
        </SafeAreaView>
       
        
    );
};

const Good = ({Purchaseorder}) => <View style={styles.table}>
    <Text>Vendor: {Purchaseorder.Vendor}</Text>
    <Text>Product: {Purchaseorder.Products}</Text>
    <Text>Quantity: {Purchaseorder.Quantity}</Text>
    <Text>Amount: {Purchaseorder.Amount}</Text>
    <Text>Terms: {Purchaseorder.Terms}</Text>
</View>

export default Order;

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
       width:'100%',
    },
 
  button3: {
        backgroundColor: '#db0925',
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
      table: {
          flexDirection:'column',
          padding:20,
          alignSelf:'center',
          alignItems:'center',
          borderStyle:'solid',
          borderWidth:1,
          borderColor:'#999594',
          borderRadius:10,
          marginTop:20,   
          width:'80%',
          marginBottom:25,
      }
});
