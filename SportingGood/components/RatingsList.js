import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import StarRating from 'react-native-star-rating';

import theme from '../../theme.js';

const Rating = ({rating, comment, createdAt}) => (
  <View style={ styles.ratingContainer }>
    <StarRating disabled={true} maxStars={5} rating={rating} fullStarColor={'#5C9059'} starSize={ 20 } containerStyle={[styles.starContainer, styles.customStarContainer]}/>
    <Text>{comment || 'No comment'}</Text>
    <Text style={ styles.aGoText }>{createdAt} ago!</Text>
  </View>
)

const RatingsList = ({ ratings = [] }) => (
  <View style={ styles.ratingsContainer }>
    <FlatList data={ ratings }
      renderItem={ ({ item }) => <Rating { ...item }/> }
      keyExtractor={ (item, index) => index.toString() }
    />
  </View>
);

const styles = StyleSheet.create({
  ...theme,
  ratingsContainer: {
    marginTop: 40,
    marginBottom: 80,
    marginLeft: 20,
    marginRight: 20
  },
  ratingContainer: {
    paddingTop: 30,
    paddingBottom: 30
  },
  customStarContainer: {
    position: 'absolute',
    right: 0,
    top: 10
  },
  aGoText: {
    position: 'absolute',
    right: 0,
    top: 40,
    fontSize: 12
  }
});

export default RatingsList;
