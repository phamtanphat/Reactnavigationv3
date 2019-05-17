/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ManageSwitchScreen from './components/switchnavigation/ManageSwitchScreen';
import ManageScreen from './components/stacknavigation/ManageScreen';
import MyDrawerNavigator from './components/drawernavigation/MyDrawerNavigator';
import ManageTabNavigation from './components/tabnavigation/ManageTabNavigation';



export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1}}>
        <ManageTabNavigation/>
      </View>
    );
  }
}
