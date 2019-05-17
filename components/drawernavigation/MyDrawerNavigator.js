
import {createDrawerNavigator , createAppContainer} from 'react-navigation';
import MyhomeScreen from './MyhomeScreen';
import MymenuScreen from './MymenuScreen';
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyhomeScreen,
      navigationOptions : {
        drawerLabel: "Home Screen",
        
      }
    },
    menu: {
      screen: MymenuScreen,
      navigationOptions : {
        drawerLabel: "Menu screen"
      }
    },
  },);

export default createAppContainer(MyDrawerNavigator );
