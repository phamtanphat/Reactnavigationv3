import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class Logout extends PureComponent {
  static navigationOptions = {
    title: 'Logout',
    headerStyle: {
        backgroundColor: 'cornflowerblue',
    },
    headerTintColor: 'crimson'
  }; 
  render() {
    return (
      <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : 'blueviolet'}}>
        <Text style={{fontSize : 40  , color : 'white' , marginBottom : 20}}>Logout Component</Text>
        <Text style={{fontSize : 18  , color : 'yellow' , marginBottom : 20}}>{this.props.navigation.getParam("text","")}</Text>
        <TouchableOpacity
            style={{ backgroundColor : 'cyan' , borderRadius : 5 , paddingHorizontal : 20 , paddingVertical : 10}}
            onPress={() => this.props.navigation.goBack()}
        >
            <Text style={{fontSize : 25  , color : 'indigo'}}>Logout</Text>    
        </TouchableOpacity>
    </View>
    )
  }
}
