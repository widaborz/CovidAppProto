import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/about'; 


const screens = {
    About:{
        screen: About
    }
}; 

const HomeDrawer = createStackNavigator(screens); 

export default HomeDrawer; 