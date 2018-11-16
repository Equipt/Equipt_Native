import React, { Fragment } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import theme from '../../theme.js';
import SubmitBtn from '../../uiComponents/SubmitBtn';
import GeoComplete from './GeoComplete.js';
import AddressForm from './AddressForm.js';

const Address = ({
  form__address,
  autocomplete,
  session,
  actions
}) => (
  <View style={ styles.container }>
    <Text style={ styles.text }>You just need to update some basic information</Text>
    <TextInput
      defaultValue={ session.phone.number }
      style={ styles.formField }
      keyboardType={ 'number-pad' }
      placeholder="Phone Number"
      onChangeText={ number => actions.updatePhone(number) }
    />
    <TouchableOpacity onPress={ () => actions.toggleAutoComplete() }>
      <Text style={ styles.link }>{ form__address.autocomplete ? 'Enter manually or' : 'Auto Search or' }</Text>
    </TouchableOpacity>
    {
      form__address.autocomplete ?
      <GeoComplete actions={ actions }/> :
      <AddressForm actions={ actions } session={ session } address={ form__address.address }/>
    }
    <SubmitBtn label="Update Address" onSubmit={ () => console.log('here') }/>
  </View>
)

const styles = StyleSheet.create({
  ...theme,
  form: {
    width: '100%'
  },
  text: {
    fontSize: 20,
    marginTop: 70,
    marginBottom: 15
  },
  link: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 15
  }
});

export default Address;
