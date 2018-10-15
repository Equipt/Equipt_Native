import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SportingGoodItem = ({ title, primary_image }) => (
  <View style={ styles.container }>
    <Image style={ styles.image } source={{ uri: primary_image }}/>
    <Text>{ title }</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10
  },
  image: {
    width: 200,
    height: 200
  }
});


export default SportingGoodItem;
