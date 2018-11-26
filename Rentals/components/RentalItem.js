import React from 'react';
import moment from 'moment';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import theme from '../../theme.js';

const RentalItem = ({
  hashId,
  title,
  startDate,
  endDate,
  navigation,
  timeTo,
  sportingGood: {
    slug,
    primaryImage
  } = {}
}) => (
  <View style={ styles.container }>
    <Text>{ hashId }</Text>
    <TouchableOpacity onPress={ () => navigation.navigate('Rental', {
      rental_hash: hashId,
      sporting_good_slug: slug
    })}>
      <Text style={ styles.title }> { title }</Text>
      <Text style={ styles.daysTo }>{ moment(startDate).fromNow() }</Text>
      <Image style={ styles.image } source={{ uri: primaryImage }}/>
    </TouchableOpacity>
  </View>
)


const styles = StyleSheet.create({
  ...theme,
  container: {
    width: '100%',
    padding: 10,
    margin: 'auto',
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#5C9059'
  },
  title: {
    color: '#5C9059',
    fontWeight: 'bold',
    fontSize: 20
  },
  daysTo: {
    marginTop: 10,
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
