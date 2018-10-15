import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../theme.js';

export class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={ styles.logo } source={require('../assets/icon.png')} />
        <Text style={ styles.brandName }>Equipt</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme,
  logo: {
    width: '50%',
    height: 200,
    marginBottom: 60
  },
  brandName: {
    fontSize: 60,
    color: '#5C9059'
  }
});
