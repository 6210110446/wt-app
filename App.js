import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';

export default function App() {

  const doIt = () => {
    console.log("Hello from console")
  }
  return (
    <View style={styles.container}>
      <Weather zipCode="90110"/>
      <StatusBar style="auto" />
  </View>

 );
>>>>>>> 576bbb8def64f5ae7d12fcade14300a800788bea
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< HEAD
});
=======
 });
 
>>>>>>> 576bbb8def64f5ae7d12fcade14300a800788bea
