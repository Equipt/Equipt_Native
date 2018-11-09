import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Loader from './../../Loading';
import ReactItem from './RentalItem';
import theme from '../../theme.js';

const Rentals = ({
   rentals,
   navigation
}) => {
  if (!rentals) return <Loader/>;

  return (
    <View style={ styles.container }>
      {
        !rentals.length ? (
          <TouchableOpacity onPress={ () => navigation.navigate("SportingGoods") }>
            <Text style={ styles.text }>No Rentals Yet</Text>
            <Text style={ styles.text }>Click here to rent</Text>
          </TouchableOpacity>
        ) :
        <FlatList data={ rentals }
          style={ styles.list }
          renderItem={ ({ item }) => <ReactItem { ...item } navigation={ navigation }/> }
          keyExtractor={ (item, index) => index.toString() }
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  ...theme,
  list: {
    width: '100%',
    marginTop: 40
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5C9059'
  }
});

export default Rentals;
