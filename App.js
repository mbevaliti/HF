import 'react-native-gesture-handler';
import React from 'react';
//import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
//import splash from './assets/splash.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import screens
import Homescreen from './Screens/Homescreen';
import Signup from './Screens/Signup';
import Signin from './Screens/Signin';

const stack = createStackNavigator();

const Auth = () => {
  return (
    <NavigationContainer>
    <stack.Navigator initialRouteName="Homescreen">
      <stack.Screen
        name="Homescreen"
        component={Homescreen}
      />
      <stack.Screen
        name="Signup"
        component={Signup}
      />
      <stack.Screen
        name="Signin"
        component={Signin}
      />
    </stack.Navigator>
    </NavigationContainer>
  );
};



export default Auth;