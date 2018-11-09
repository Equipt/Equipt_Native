import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import theme from '../theme.js';

export class Home extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image style={ styles.logo } source={require('../assets/icon.png')} />
        <Text style={ styles.brandName }>Equipt</Text>
        <TouchableOpacity onPress={ () => navigation.navigate('Login') }>
          <Text style={ styles.signUp }>Sign up</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme,
  logo: {
    width: '50%',
    height: 200,
    marginBottom: 20
  },
  brandName: {
    fontSize: 60,
    color: '#5C9059'
  },
  signUp: {
    marginTop: 40,
    fontSize: 18
  }
});
