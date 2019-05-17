import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default class Homescreen  extends PureComponent {
  static navigationOptions = {
    title: 'Home Screen',
    headerStyle: {
      backgroundColor: 'cornflowerblue',
    },
    headerTintColor: 'crimson'
  };
  constructor(props){
    super(props);
    this.state = {
      name : ''
    }
    this._signOutAsync = this._signOutAsync.bind(this);
  }
  async componentDidMount(){
      let name = await AsyncStorage.getItem('userToken')
      if(name == null) return;
      this.setState({name})
      
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('SigIn');
  };
  render() {
    return (
      <View style={{flex : 1 , justifyContent : 'center'}}>
        <Text style={{fontSize : 30 , alignSelf : 'center' , textAlign : 'center'}}>Name token {this.state.name}</Text>
        <TouchableOpacity
          style={{backgroundColor : 'aquamarine' , padding : 10 , alignSelf : 'center' , marginTop : 10 , borderRadius : 5, borderWidth : 1}}
          onPress={this._signOutAsync}
        >
          <Text style={{fontSize : 20 , color : 'black'}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
