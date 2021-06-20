import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import splash from './assets/splash.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={splash} style={{ height: 100, width: 100 }} />
      <Text>Hospital Finder</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
