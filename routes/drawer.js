import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { createAppContainer } from 'react-navigation'; 

import HomeStack from './homeStack'; 
import AboutStack from './aboutStack'; 
import UserStack from './userStack'

const stackScreens = {
    Home: {
        screen: HomeStack
    }, 
    About: {
        screen: AboutStack
    }, 
    User: {
        screen: UserStack
    }
}

const RootDrawerNavigator = createDrawerNavigator(stackScreens); 

export default createAppContainer(RootDrawerNavigator); 