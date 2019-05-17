import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class Login extends PureComponent {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: 'cornflowerblue',
        },
        headerTintColor: 'crimson'
    }; 
    render() {
        return (
        <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : 'darkseagreen'}}>
            <Text style={{fontSize : 40  , color : 'white' , marginBottom : 20}}>Login Component</Text>
            <TouchableOpacity
                style={{ backgroundColor : 'yellow' , borderRadius : 5 , paddingHorizontal : 20 , paddingVertical : 10}}
                onPress={() => this.props.navigation.navigate("Logout",{text : "Dang nhap thanh cong"})}
            >
                <Text style={{fontSize : 25  , color : 'red'}}>Login</Text>    
            </TouchableOpacity>
        </View>
        )
    }
}
