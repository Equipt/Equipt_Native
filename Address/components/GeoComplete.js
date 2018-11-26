import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GeoComplete = ({
  address,
  actions,
  addressStyles
}) => (
  <GooglePlacesAutocomplete
    placeholder='Search For Address'
    minLength={2}
    autoFocus={false}
    returnKeyType={'search'}
    listViewDisplayed='auto'
    fetchDetails={true}
    renderDescription={row => row.description}
    query={{
      key: process.env.GOOGLE_MAPS_KEY,
      language: 'en', // language of the results
    }}
    styles={addressStyles}
    onPress={(data, { address_components: [
      unit = {},
      street = {},
      city = {},
      area = {},
      state = {},
      country = {},
      zip = {}
    ] } = null) => actions.updatedAddressForm({
      number: unit.short_name,
      street: street.short_name,
      city: city.short_name,
      state: state.short_name,
      country: country.short_name,
      zip: zip.short_name
    })
  }/>
)

GeoComplete.defaultProps = {
  addressStyles: {
    textInputContainer: {
      width: '100%',
      padding: 10,
      paddingLeft: 5,
      height: 60,
      borderWidth: 1,
      backgroundColor: '#fff',
      borderLeftColor:'gray',
    },
    description: {
      fontWeight: 'bold'
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    }
  }
}

export default GeoComplete;
