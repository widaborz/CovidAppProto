import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home'
import ItemDetail from '../screens/itemDetail'

const screens = {
    Home: {
        screen: Home
    },
    ItemDetail: {
      screen: ItemDetail,
    }
  };

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default HomeStack;