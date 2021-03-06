import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import theme from '../../theme.js';
import SportingGood from './SportingGoodItem.js';

const OwnersSportingGoods = ({
  sportingGoods
}) => (
  <View style={ styles.container }>
    <FlatList data={ sportingGoods.results }
      style={ styles.list }
      renderItem={ ({ item }) => <SportingGood { ...item }/> }
      keyExtractor={ (item, index) => index.toString() }
      />
  </View>
);

const styles = StyleSheet.create({
  ...theme,
  list: {
    width: '100%'
  }
});

export default OwnersSportingGoods;
