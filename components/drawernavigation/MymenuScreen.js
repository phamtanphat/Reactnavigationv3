import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'

export default class MymenuScreen extends PureComponent {
  render() {
    const { openDrawer } = this.props.navigation;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Menu Screen Component 
            </Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => openDrawer()}
            >
                <Text style={styles.buttonText}>Toggle Drawer</Text>
            </TouchableOpacity>
        </View>
    )
  }
}
const styles = {
  container: {
      backgroundColor: 'darkseagreen',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      fontSize: 30,
      color: 'white',
      marginBottom: 50
  },
  buttonContainer: {
      backgroundColor: 'deeppink',
      padding: 10,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderColor: '#A08FB8',
      borderWidth: 2
  },
  buttonText: {
      color: 'white',
      fontWeight: 'bold'
  }
}