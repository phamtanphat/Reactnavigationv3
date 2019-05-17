
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Login';
import Logout from './Logout';

const ManageScreen = createStackNavigator({
    Login: {
        screen: Login
    },
    Logout:{
        screen: Logout
    }
} ,{defaultNavigationOptions : { 
    headerTitleStyle: {
    fontWeight: 'bold',
  },}});

export default createAppContainer(ManageScreen);
