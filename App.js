import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Feed from './Screens/Feed';
import Instructions from './Screens/Instructions';
import Exams from './Screens/Exams'
// import TabBar from './navigation/TabBar';



export default function App() {
  return (
    // <TabBar/>

    <Exams/>
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
