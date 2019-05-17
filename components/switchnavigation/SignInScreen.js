import React, { PureComponent } from 'react'
import { Text, View , TextInput , TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default class SignInScreen  extends PureComponent {
  static navigationOptions = {
    title : 'Login Screen',
    headerStyle: {
      backgroundColor: 'cornflowerblue',
    },
    headerTintColor: 'crimson'
  }
  constructor(props){
      super(props);
      this.state={
        text : ''
      }
      this._signInAsync = this._signInAsync.bind(this);
  }
  _signInAsync = async() =>{
      if(this.state.text.length > 0 && isNaN(this.state.text)){
        await AsyncStorage.setItem('userToken', this.state.text);
        this.props.navigation.navigate('Home');
      }else{
        alert("Input text not a number and not empty input")
      }
      
  }
  render() {
    return (
      <View style={{flex : 1 , justifyContent : 'center' , flexDirection : 'column'}}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1 , marginHorizontal : 10}}
            placeholder="Input name"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          ></TextInput>
          <TouchableOpacity
             style={{backgroundColor : 'yellow' , padding : 10 , alignSelf : 'center' , marginTop : 10 , borderRadius : 5, borderWidth : 1}}
             onPress={this._signInAsync}
          >
            <Text style={{color : 'red', fontSize : 30}}>Save name</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
