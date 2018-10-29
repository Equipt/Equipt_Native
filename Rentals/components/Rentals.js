import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import ReactItem from './RentalItem';
import theme from '../../theme.js';

const Rentals = ({ rentals, navigation }) => (
  <View style={ styles.container }>
    <FlatList data={ rentals }
              style={ styles.list }
              renderItem={ ({ item }) => <ReactItem { ...item }/> }
              keyExtractor={ (item, index) => index.toString() }
            />
    <Text>Rentals</Text>
  </View>
)

const styles = StyleSheet.create({
  ...theme,
  list: {
    width: '100%'
  }
});

export default Rentals;
