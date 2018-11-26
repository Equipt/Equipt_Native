import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import theme from '../../theme.js';

const AddressForm = ({
  address,
  session,
  actions
}) => (
  <View style={ styles.form }>
    <View style={ styles.inlineFields }>
      <TextInput style={[styles.formField, styles.unit]} defaultValue={  address.unit || session.address.unit } placeholder="Unit" onChangeText={ unit => actions.updateAddressField({ unit }) }/>
      <TextInput style={[styles.formField, styles.number ]} defaultValue={  address.number || session.address.number } placeholder="Street #" onChangeText={ number => actions.updateAddressField({ number }) }/>
    </View>
    <TextInput style={ styles.formField } defaultValue={  address.street || session.address.street } placeholder="Address" onChangeText={ street => actions.updateAddressField({ street }) }/>
    <TextInput style={ styles.formField } defaultValue={  address.city || session.address.city } placeholder="Town / City" onChangeText={ city => actions.updateAddressField({ city }) }/>
    <TextInput style={ styles.formField } defaultValue={  address.state || session.address.state } placeholder="State / Province" onChangeText={ state => actions.updateAddressField({ state }) }/>
    <View style={ styles.inlineFields }>
      <TextInput style={[ styles.formField, styles.country ]} defaultValue={  address.country || session.address.country } placeholder="Country" onChangeText={ country => actions.updateAddressField({ country }) }/>
      <TextInput style={[ styles.formField, styles.zip ]} defaultValue={  address.zip || session.address.zip } placeholder="Zip / Postcode " onChangeText={ zip => actions.updateAddressField({ zip }) }/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  ...theme,
  form: {
    width: '100%'
  },
  inlineFields: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  unit: {
    width: '25%'
  },
  number: {
    width: '68%'
  },
  country: {
    width: '47%'
  },
  zip: {
    width: '47%'
  }
});

export default AddressForm;
