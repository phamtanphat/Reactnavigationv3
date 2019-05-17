import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Tab2Screen extends PureComponent { 
    static navigationOptions = {
        tabBarIcon: param =>{
            if(param.focused) return <Icon name="biohazard" color="dodgerblue" size={20}/>
            return <Icon name="biohazard" color="aliceblue" size={20}/>
        }
    };
    render() {
        return (
        <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : 'green'}}>
            <Text style={{fontSize : 40  , color : 'white' , marginBottom : 20}}>Tab2 Component</Text>
        </View>
        )
    }
}
