import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import User from '../screens/user'
import Header from '../shared/header'

const screens = {
    User: {
        screen: User, 
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation = {navigation} title = 'Dati Utente'/>
            }
          },
    }
}; 

const UserStack = createStackNavigator(screens); 

export default UserStack; 