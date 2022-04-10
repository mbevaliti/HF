import 'react-native-gesture-handler';
import React from 'react';
import { firebase } from './src/firebase/config';
//import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
//import splash from './assets/splash.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
//import screens
import Homescreen from './Screens/Homescreen';
import Signup from './Screens/Signup';
import Signin from './Screens/Signin';
import Mainpage from './Screens/Mainpage';
import Vendor from './Screens/Vendor';
import Internal from './Screens/Internal';
import Product from './Screens/Product';
import Stocktake from './Screens/Stocktake';
import Stockadjustment from './Screens/Stockadjustment';
import DrawerNavigationRoutes from './Screens/DrawerNavigationRoutes';
import Purchaseorder from './Screens/Purchaseorder';
import Order from './Screens/Order';

const stack = createStackNavigator();

const Auth = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  if (loading) {
    return (
      <stack.Navigator initialRouteName="Homescreen">
        <stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    )

  }
  useEffect(() => {
    const usersRef = firebase.firestire().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);


};

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Homescreen">
        <stack.Screen
          name="Homescreen"
          component={Auth}
          options={{ headerShown: false }} />
        <stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{ headerShown: false }}
        />
        <stack.Screen 
           name="Mainpage"
           component={Mainpage}
           options={{
            title: 'Mainpage',
            headerShown: false,
        }}
        />
         <stack.Screen 
           name="Internal"
           component={Internal}
           options={{
            title: 'Internal',
            headerShown: false,
        }}
        />
         <stack.Screen 
           name="Product"
           component={Product}
           options={{
            title: 'Product',
            headerShown: false,
        }}
        />
         <stack.Screen 
           name="Vendor"
           component={Vendor}
           options={{
            title: 'Vendor',
            headerShown: false,
        }}
        />
        <stack.Screen 
           name="Stocktake"
           component={Stocktake}
           options={{
            title: 'Stocktake',
            headerShown: false,
        }}
        />
          <stack.Screen 
           name="Stockadjustment"
           component={Stockadjustment}
           options={{
            title: 'Stockadjustment',
            headerShown: false,
        }}
        />
        <stack.Screen 
           name="Purchaseorder"
           component={Purchaseorder}
           options={{
            title: 'Purchaseorder',
            headerShown: false,
        }}
        />
          <stack.Screen 
           name="Order"
           component={Order}
           options={{
            title: 'Order',
            headerShown: false,
        }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};



export default App;