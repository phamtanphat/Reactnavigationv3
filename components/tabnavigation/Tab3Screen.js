import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Tab3Screen extends PureComponent { 
    static navigationOptions = {
        tabBarIcon: param =>{
            if(param.focused) return <Icon name="cog" color="cyan" size={20}/>
            return <Icon name="cog" color="aliceblue" size={20}/>
        }
    };
    render() {
        return (
        <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : 'darkorchid'}}>
            <Text style={{fontSize : 40  , color : 'white' , marginBottom : 20}}>Tab3 Component</Text>
        </View>
        )
    }
}
