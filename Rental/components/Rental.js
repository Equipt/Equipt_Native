import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme.js';

class Rental extends Component {

  componentWillMount() {
    const { navigation, actions } = this.props;
    const hash = navigation.getParam('rental_hash');
    const slug = navigation.getParam('sporting_good_slug');
    actions.fetchRental(slug, hash);
  }

  componentWillReceiveProps() {

  }

  render() {

    const {
      rental: {
        sportingGood
      } = {}
    } = this.props;

    return (
      <View style={ styles.container }>
        <Text>{ sportingGood.title }</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme
});

export default Rental;
