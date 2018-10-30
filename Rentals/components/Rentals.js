import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Loader from './../../Loading';
import ReactItem from './RentalItem';
import theme from '../../theme.js';

class Rentals extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchRentals();
  }

  render() {
    const { rentals, navigation } = this.props;

    if (!rentals) return <Loader/>;

    return (
      <View style={ styles.container }>
        <FlatList data={ rentals }
          style={ styles.list }
          renderItem={ ({ item }) => <ReactItem { ...item } navigation={ navigation }/> }
          keyExtractor={ (item, index) => index.toString() }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...theme,
  list: {
    width: '100%'
  }
});

export default Rentals;
