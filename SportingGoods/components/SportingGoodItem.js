import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

const SportingGoodItem = ({ navigation, slug, title, brand, primary_image, price_per_day, overall_rating }) => (
    <View style={ styles.container }>
      <TouchableOpacity onPress={ () => navigation.navigate('SportingGood', { slug }) }>
        { primary_image ? <Image style={ styles.image } source={{ uri: process.env.BASE_URL + primary_image }}/> : <View style={ styles.blankImage }></View> }
        <Text style={ styles.title }>{ title }</Text>
        <Text>{ brand }</Text>
        <Text style={ styles.price }>${ price_per_day } per day</Text>
      </TouchableOpacity>
      <StarRating disabled={true} maxStars={5} rating={overall_rating} fullStarColor={'#5C9059'} starSize={ 20 } containerStyle={ styles.starContainer }/>
    </View>
);

const styles = StyleSheet.create({
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
  title: {
    marginTop: 5,
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  price: {
    marginTop: 5,
    color: '#333',
  },
  blankImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#CCCCCC'
  },
  starContainer: {
    width: 100,
    marginTop: 5
  }
});


export default SportingGoodItem;
