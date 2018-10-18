import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../theme.js';
import SubmitBtn from '../../uiComponents/SubmitBtn';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
    this.isValid = this.isValid.bind(this);
  }

  isValid() {
    return !Object.values(this.state).filter(value => !value.length).length;
  }

  render() {
    const { session, actions } = this.props;
    const { errors = {} } = session || {};
    console.log(errors);
    return (
      <View style={styles.container}>
        <Text style={ styles.errorText}>{ errors['firstname'] }</Text>
        <TextInput style={ styles.formField } placeholder="Enter Your First Name" onChangeText={ firstname => this.setState({ firstname }) }/>
        <Text style={ styles.errorText}>{ errors['lastname'] }</Text>
        <TextInput style={ styles.formField } placeholder="Enter Your Last Name" onChangeText={ lastname => this.setState({ lastname }) }/>
        <Text style={ styles.errorText}>{ errors['email'] }</Text>
        <TextInput style={ styles.formField } placeholder="Enter Your Email" onChangeText={ email => this.setState({ email }) }/>
        <Text style={ styles.errorText}>{ errors['password'] }</Text>
        <TextInput secureTextEntry={ true } style={ styles.formField } placeholder="Enter A Password" onChangeText={ password => this.setState({ password }) }/>
        <Text style={ styles.errorText}>{ errors['password_confirmation'] }</Text>
        <TextInput secureTextEntry={ true } style={ styles.formField } placeholder="Confirm Password" onChangeText={ password_confirmation => this.setState({ password_confirmation }) }/>
        <SubmitBtn label="Sign Up" onSubmit={ () => actions.register(this.state) } isValid={ this.isValid() }/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme
});
