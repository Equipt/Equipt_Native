import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import theme from '../../theme.js';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { email, password } = this.state;
    const { actions, navigation } = this.props;

    return (
      <View style={styles.container}>
        <TextInput style={ styles.formField } placeholder="Enter your Email" onChangeText={ email => this.setState({ email }) }/>
        <TextInput secureTextEntry={ true } style={ styles.formField } placeholder="Enter your Password" onChangeText={ password => this.setState({ password }) }/>
        <TouchableOpacity style={{ width: '100%', marginBottom: 20}} onPress={ () => actions.login({ email, password }, navigation) }>
          <Text style={ email && password ? styles.successBtn : styles.deactiveBtn }>Login Test</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.facebookBtn } onPress={ () => actions.facebookLogin() }>
          <Text style={ styles.facebookText }>Facebook Login</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme,
  facebookBtn: {
    backgroundColor: '#4379DE',
    width: '100%',
    padding: 20,
    marginTop: 60
  },
  facebookText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  }
});
