import React, { Component } from 'react';
import PhoneInput from 'react-native-phone-input';

class PhoneNumberInput extends Component {

  render() {
    return (
      <PhoneInput ref='phone'/>
    )
  }

}

export default PhoneNumberInput;
