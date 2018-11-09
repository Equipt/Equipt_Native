import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import theme from '../../theme.js';

const Address = ({
  session
}) => (
  <View style={ styles.container }>
    <Text style={ styles.errorText }>{ errors['phone'] }</Text>
    <TextInput style={ styles.formField } placeholder="Enter Your First Name" onChangeText={ firstname => this.setState({ firstname }) }/>
  </View>
)

const styles = StyleSheet.create({
  ...theme
});



export default Address;
