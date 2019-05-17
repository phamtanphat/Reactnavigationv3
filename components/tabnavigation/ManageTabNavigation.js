import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import Tab3Screen from './Tab3Screen';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
const ManageTabNavigation = createBottomTabNavigator({
    Tab1: Tab1Screen,
    Tab2: Tab2Screen,
    Tab3: Tab3Screen
  });
  
export default createAppContainer(ManageTabNavigation);