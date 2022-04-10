import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import splash from '../assets/splash.png';
import { useState } from 'react';
import { firebase } from '../src/firebase/config';
import nexx from  '../Image/nexx.png';
import { SafeAreaView } from 'react-native-safe-area-context';


const Purchaseorder = ({ navigation }) => {
    const [Vendor, setVendor] = useState('')
    const [Products, setProducts] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [Amount, setAmount] = useState('')
    const [Terms, setTerms] = useState('')
    
    const onSignupPress = async () => {
                const data = {
                    Vendor,
                    Products,
                    Quantity,
                    Amount,
                    Terms,
                };  
    
                const res = await firebase.firestore().collection('Purchaseorder').add(data);
               navigation.replace('Order')
    }
    return (
    <SafeAreaView style={styles.container}>  
               <View style={styles.nav} >
               <Image source={splash} style={{ height: 50, width: 50, alignSelf:'center', }} />
               </View>
               <View style={styles.body}>
               <Text style={styles.txt}>Check Stock</Text>
               </View>
               <View style={styles.field}>
               <TextInput style={styles.input}
                placeholder="Enter Vendor"
                keyboardType="default"
                onChangeText={(text) => setVendor(text)}
                value={Vendor}
            />
             <TextInput style={styles.input}
                placeholder="Enter Products"
                keyboardType="default"
                onChangeText={(text) => setProducts(text)}
                value={Products}
            />
            <TextInput style={styles.input}
                placeholder="Quantity"
                keyboardType="default"
                onChangeText={(number) => setQuantity(number)}
                value={Quantity}
            />
            <TextInput style={styles.input}
                placeholder="Enter Amount"
                keyboardType="default"
                onChangeText={(number) => setAmount(number)}
                value={Amount}
            />
             <TextInput style={styles.input}
                placeholder="Terms Agreed"
                keyboardType="default"
                onChangeText={(number) => setTerms(number)}
                value={Terms}
            />
          
            <TouchableOpacity style={styles.button}
                onPress={() => onSignupPress()}>
                <Text style={styles.Text}>Create</Text>
            </TouchableOpacity>
               </View>
              
        </SafeAreaView>
      
    );
};

export default Purchaseorder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       // alignItems: 'center',
        //justifyContent: 'center',
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
        alignSelf:'center',
    },
    input: {
        backgroundColor:'white',
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        width: 300,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        
    },
    nav: {
        backgroundColor:'#181c47',  
    },
    txt: {
        alignSelf:'center',
        fontSize: 20,
        
       },
    body: {
        backgroundColor:'#999594',
        height: '5%',
      },
    field: {
        alignItems:'center',
        alignSelf:'center',
        marginTop:180,
    }
});
