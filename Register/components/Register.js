import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../theme.js';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  render() {
    const { actions } = this.props;
    return (
      <View style={styles.container}>
        <TextInput style={ styles.formField } placeholder="Enter Your Name" onChangeText={ name => this.setState({ name }) }/>
        <TextInput style={ styles.formField } placeholder="Enter Your Email" onChangeText={ email => this.setState({ email }) }/>
        <TextInput secureTextEntry={ true } style={ styles.formField } placeholder="Enter A Password" onChangeText={ password => this.setState({ password }) }/>
        <TextInput secureTextEntry={ true } style={ styles.formField } placeholder="Confirm Password" onChangeText={ passwordConfirmation => this.setState({ passwordConfirmation }) }/>
        <TouchableOpacity style={{ width: '100%', marginBottom: 20}} onPress={ () => actions.login(this.state) }>
          <Text style={ styles.successBtn }>SignUp</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme
});
