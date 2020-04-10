import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as  Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/header'
import Home from './screens/home'
import { userData } from './data/data'

const getFont = () => Font.loadAsync({
    'gotu-regular': require('./assets/fonts/Gotu-Regular.ttf'),
  });

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState('off');

      if(fontsLoaded == 'on')
      {
        return(
          <View>
            <Header />
            <Home userData = {userData}/>
          </View>
        )
      }
      else 
      {
        return(
            <AppLoading 
              startAsync={getFont} 
              onFinish={() => setFontsLoaded('on')} 
            />
        )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
