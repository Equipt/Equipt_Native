import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import theme from '../../theme.js';

const RentalItem = ({
  hashId,
  startDate,
  endDate,
  navigation,
  sportingGood: {
    slug,
    primaryImage
  } = {}
}) => {
  return (
    <View style={ styles.container }>
      <TouchableOpacity onPress={ () => navigation.navigate('Rental', {
        rental_hash: hashId,
        sporting_good_slug: slug
      })}>
        <Text>{ startDate } - { endDate }</Text>
        { primaryImage ? <Image style={ styles.image } source={{ uri: process.env.BASE_URL + primaryImage }}/> : <View style={ styles.blankImage }></View> }
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  ...theme,
  container: {
    width: '100%',
    padding: 10,
    margin: 'auto',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  blankImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#CCCCCC'
  },
});

export default RentalItem;
