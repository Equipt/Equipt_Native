import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker, Modal } from 'react-native';

import theme from '../../theme.js';
import searchIcon from '../../assets/search.png';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      location: null,
      dates: null,
      isLocationModalVisible: false
    }
    this.keywordUpdated = this.keywordUpdated.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  keywordUpdated(keyword) {
    const { search } = this.props;
    keyword.length > 2 ? search(keyword) : search('');
  }

  searchUpdated(location) {

  }

  render() {
    const { isLocationModalVisible } = this.state;
    return (
      <View style={ styles.container }>
        <View styles={ styles.searchContainer }>
          <Image source={ searchIcon } style={ styles.search }/>
          <TextInput style={ styles.searchInput } placeholder="What are you looking for?" onChangeText={ this.keywordUpdated }/>
        </View>
        <View styles={ styles.searchContainer }>
          <TextInput style={[ styles.searchInput, styles.locationTab, { justifyContent: 'flex-start' } ]} placeholder="Enter a place?" onChangeText={ this.searchUpdated }/>
          <TouchableOpacity style={{ position: 'absolute', right: 0, top: 10 }} onPress={ () => {
            this.setState({ isLocationModalVisible: true })
          }}>
            <Text style={ styles.distanceTab }>Distance</Text>
          </TouchableOpacity>
        </View>
        <Modal presentationStyle='overFullScreen' transparent={ true } visible={ isLocationModalVisible }>
          <View style={ styles.overlay }/>
          <Picker style={ styles.distanceContainer }>
            <Picker.Item label="50km" value="5000"/>
            <Picker.Item label="10km" value="10000"/>
            <Picker.Item label="20km" value="20000"/>
            <Picker.Item label="50km" value="50000"/>
          </Picker>
        </Modal>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme,
  container: {
    marginTop: 25,
    marginBottom: 10,
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
  search: {
    position: 'absolute',
    top: 12,
    left: 5,
    width: 20,
    height: 20,
    marginLeft: 10
  },
  locationTab: {
    marginTop: 10,
    width: 200,
    paddingLeft: 10
  },
  distanceTab: {
    width: 110,
    textAlign: 'center',
    padding: 13,
    backgroundColor: '#ccc',
    color: '#333'
  },
  distanceContainer: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: 500,
  },
  overlay: {
    zIndex: 0,
    backgroundColor: '#ccc',
    height: '100%',
    opacity: 0.5
  }
});

export default Filter;
