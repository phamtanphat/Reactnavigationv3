import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from './AuthLoadingScreen';
import Homescreen from './Homescreen';
import SignInScreen from './SignInScreen';

const Home = createStackNavigator({ Home: Homescreen});
const SignIn = createStackNavigator({ SignIn : SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    SigIn: SignIn,
    Home: Home,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));