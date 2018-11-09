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
}) => {
  return (
    <View style={ styles.container }>
      <TouchableOpacity onPress={ () => navigation.navigate('Rental', {
        rental_hash: hashId,
        sporting_good_slug: slug
      })}>
        <Text style={ styles.title }> { title }</Text>
        <Text style={ styles.daysTo }>
          { timeTo.years > 1 ? `${ timeTo.years } Years ` : null }
          { timeTo.years === 1 ? `${ timeTo.years } Year ` : null }
          { timeTo.months > 1 ? `${ timeTo.months } Months ` : null }
          { timeTo.months === 1 ? `${ timeTo.months } Month ` : null }
          { timeTo.days === 1 ? `${ timeTo.days } Day ` : null }
          { timeTo.days > 1 ? `${ timeTo.days } Days ` : null }
          Away
        </Text>
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
