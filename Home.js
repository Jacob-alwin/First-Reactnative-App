import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Button
} from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  option1 = () => {
    Linking.openURL('https://self-signed.badssl.com')
  }

  option2 = () => {
    this.props.navigation.navigate(
      'Browser',
      { url: 'https://self-signed.badssl.com' }
    )
  }

  render() {
    return (
      <View style={styles.container}>

      
        <TouchableOpacity onPress={this.option1}>
        <Button title='Visit'></Button>

        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40
  },
  text: {
    fontSize: 16,
    margin: 20,
    marginBottom: 0
  },
  bold: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40
  },
  link: {
    margin: 20,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
