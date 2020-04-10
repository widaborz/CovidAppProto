import React, { useState } from 'react';
import * as  Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack'

const getFont = () => Font.loadAsync({
    'gotu-regular': require('./assets/fonts/Gotu-Regular.ttf')
    });

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState('off');

      if(fontsLoaded == 'on')
      {
        console.log('start navigator'); 
        return(
          <Navigator />
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