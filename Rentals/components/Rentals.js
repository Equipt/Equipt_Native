import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import theme from '../../theme.js';

const Rentals = ({ rentals }) => (
  <View style={ styles.container }>
    <FlatList data={ rentals }
              style={ styles.list }
              renderItem={ ({ item }) => <Text>{item.hashId}</Text> }
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
