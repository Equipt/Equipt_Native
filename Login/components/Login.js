import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import SubmitBtn from '../../uiComponents/SubmitBtn';
import FBSDK from 'react-native-fbsdk';
const { LoginButton, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

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
        <TextInput
          style={ styles.formField }
          placeholder="Enter your Email"
          onChangeText={ email => this.setState({ email }) }/>
        <TextInput
          secureTextEntry={ true }
          style={ styles.formField }
          placeholder="Enter your Password"
          onChangeText={ password => this.setState({ password }) }/>
        <SubmitBtn label="Log In" onSubmit={ () => actions.login(this.state) } isValid={ email.length && password.length }/>
        <TouchableOpacity style={ styles.facebookBtn } onPress={ () => actions.facebookLogin() }>
          <Text style={ styles.facebookText }>Facebook Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('Register') }>
          <Text style={ styles.link }>Or create a new account</Text>
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
    marginTop: 20
  },
  facebookText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  link: {
    marginTop: 25
  }
});
