import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const RentalItem = (props) => {
  console.log(props);
  return (
    <View>
      <Text>{ props.title }</Text>
    </View>
  )
};

export default RentalItem;
