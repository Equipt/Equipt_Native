import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker, Modal } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import theme from '../../theme.js';
import searchIcon from '../../assets/search.png';
import geoIcon from '../../assets/geo.png';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      location: null,
      isLocationModalVisible: false
    }
  }

  componentDidUpdate() {
    const { actions } = this.props;
    const { keyword, location } = this.state;
    actions.fetchSportingGoods({ keyword, location });
  }

  render() {
    const { isLocationModalVisible } = this.state;
    return (
      <View style={ styles.container }>
        <View styles={ styles.searchContainer }>
          <Image source={ searchIcon } style={ styles.searchIcon }/>
          <TextInput style={ styles.searchInput }
                     placeholder="What are you looking for?"
                     onChangeText={ keyword => this.setState({ keyword }) }/>
        </View>
        <View styles={ styles.searchContainer }>
          <Image source={ geoIcon } style={ styles.geo }/>
          <GooglePlacesAutocomplete
            placeholder="Where are you looking?"
            fetchDetails={true}
            minLength={2}
            query={{
              key: process.env.GOOGLE_MAPS_KEY
            }}
            styles={ geoLocationStyles }
            onPress={ (data, { geometry: { location } = {} } = {} ) => this.setState({ location }) }
          />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme,
  container: {
    marginTop: 35,
    marginBottom: 10,
    zIndex: 2
  },
  searchContainer: {
    flexDirection:"row",
    height: 40,
    marginTop: 15,
  },
  searchInput: {
    width: 320,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    paddingLeft: 45,
    paddingRight: 5,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  searchIcon: {
    position: 'absolute',
    top: 12,
    left: 5,
    width: 20,
    height: 20,
    marginLeft: 10
  },
  geo: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 25,
    height: 25,
    zIndex: 2
  }
});

const geoLocationStyles = {
  container: {
    position: 'relative',
    width: '100%',
    maxHeight: 50,
    zIndex: 100
  },
  listView: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 60,
    width: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  textInputContainer: {
    width: 320,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    marginTop: 10,
    padding: 0,
    borderColor: '#ccc',
    paddingLeft: 25,
    paddingRight: 5,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  textInput: {
    borderWidth: 0,
    fontSize: 14,
    textShadowColor: 'transparent',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    shadowColor: 'transparent',
  }
}

export default Filter;
