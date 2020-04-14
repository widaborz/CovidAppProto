import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/about'; 
import Header from '../shared/header';

const screens = {
    About:{
        screen: About, 
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation = {navigation} title = 'About'/>
            }
          },
    }
}; 

const HomeDrawer = createStackNavigator(screens); 

export default HomeDrawer; 