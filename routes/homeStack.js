import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ItemDetail from '../screens/itemDetail';
import Header from '../shared/header'; 

const screens = {
    Home: {
        screen: Home, 
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title = 'Home'/>
          }
        },
    },
    ItemDetail: {
      screen: ItemDetail, 
      navigationOptions: {
        title: 'Parameter Details'
      }
    }
  };

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444', 
    headerStyle: {backgroundColor: '#eee', height: 60}
  }
});

export default HomeStack;