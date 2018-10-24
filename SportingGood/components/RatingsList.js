import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import StarRating from 'react-native-star-rating';

const Rating = ({rating}) => (
  <StarRating disabled={true} maxStars={5} rating={rating} fullStarColor={'#5C9059'} starSize={ 20 } containerStyle={ styles.starContainer }/>
)

const RatingsList = ({ ratings = [] }) => (
  <View>
    <FlatList data={ ratings }
      renderItem={ ({ item }) => <Rating { ...item }/> }
      keyExtractor={ (item, index) => index.toString() }
    />
  </View>
);

const styles = StyleSheet.create({
  starContainer: {
    width: 100,
    marginTop: 5
  }
});

export default RatingsList;
