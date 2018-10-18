import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import theme from '../theme.js';

const SumbitBtn = ({ label = 'Submit', onSubmit, isValid = true }) => (
  <TouchableOpacity disabled={ !isValid } style={{ width: '100%', marginBottom: 20}} onPress={ (e) => onSubmit(e) }>
    <Text style={[ styles.successBtn, !isValid && styles.disabled ]}>{ label }</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  ...theme,
  disabled: {
    opacity: 0.6
  }
});

export default SumbitBtn;
