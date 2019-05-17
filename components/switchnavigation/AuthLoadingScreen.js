import React, { PureComponent } from 'react'
import { View  , ActivityIndicator ,StatusBar} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen  extends PureComponent {
  async componentDidMount(){
    const userToken = await AsyncStorage.getItem('userToken');
    setTimeout(() => this.props.navigation.navigate(userToken ? 'Home' : 'SigIn'), 2000)
    
  }
  render() {
    return (
      <View style={{justifyContent : 'center' , alignItems : 'center' , flex : 1}}>
        <ActivityIndicator size="large" color="#0000ff"/>
        <StatusBar barStyle="light-content" />
      </View>
    )
  }
}
