import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import theme from '../../theme.js';

const SportingGoodItem = ({
  title
}) => (
  <View style={ styles.container }>
    <Text style={ styles.text }>{ title }</Text>
  </View>
);

const styles = StyleSheet.create({
  ...theme,
  text: {
    color: '#333'
  }
});

export default SportingGoodItem;
