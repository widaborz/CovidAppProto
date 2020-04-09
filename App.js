import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header'
import Home from './screens/home'

export default function App() {

  const userData = {name: "Matteo Canzari", prov: "TE", affiliation: "OAAb"};

    return (
      <View>
        <Header />
        <Home userData = {userData}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
