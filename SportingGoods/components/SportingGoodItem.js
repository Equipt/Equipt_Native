import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SportingGoodItem = ({ navigation, slug, title, primary_image }) => (
    <View style={ styles.container }>
      <TouchableOpacity onPress={ () => navigation.navigate('SportingGood', { slug }) }>
        { primary_image ? <Image style={ styles.image } source={{ uri: process.env.BASE_URL + primary_image }}/> : null }
        <Text style={ styles.title }>{ title }</Text>
      </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    backgroundColor: 'blue',
    margin: 'auto'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 20,
    textAlign: 'left'
  }
});


export default SportingGoodItem;
