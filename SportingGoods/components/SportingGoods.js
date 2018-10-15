import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import SportingGoodItem from './SportingGoodItem.js';

import theme from '../../theme.js';

class SportingGoods extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.getSportingGoods();
  }

  render() {
    const { sportingGoods } = this.props;
    console.log(sportingGoods);
    return (
      <View style={ styles.container }>
        <FlatList data={ sportingGoods }
                  renderItem={ ({ item }) => <SportingGoodItem { ...item }/> }
                  keyExtractor={(item, index) => index.toString()}
                  />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme
});

export default SportingGoods;
