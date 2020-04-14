import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { createAppContainer } from 'react-navigation'; 

import HomeStack from './homeStack'; 
import AboutStack from './aboutStack'; 

const stackScreens = {
    Home: {
        screen: HomeStack
    }, 
    About: {
        screen: AboutStack
    }
}

const RootDrawerNavigator = createDrawerNavigator(stackScreens); 

export default createAppContainer(RootDrawerNavigator); 