import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Tab1Screen extends PureComponent { 
    static navigationOptions = {
        tabBarIcon: param =>{
            if(param.focused) return <Icon name="heart" color="crimson" size={20}/>
            return <Icon name="heart" color="aliceblue" size={20}/>
        }
    };
    render() {
        return (
        <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : 'darkseagreen'}}>
            
            <Text style={{fontSize : 40  , color : 'white' , marginBottom : 20}}>Tab1 Component</Text>
        </View>
        )
    }
}
