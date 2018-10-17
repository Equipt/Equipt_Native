import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme.js';

export default class SportingGood extends Component {

  componentWillMount() {
    const { navigation, actions } = this.props;
    const slug = navigation.getParam('slug');
    actions.fetchSportingGood(slug);
  }

  render() {
    const { sportingGood } = this.props;
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
