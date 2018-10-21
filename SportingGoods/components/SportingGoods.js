import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Loading from '../../Loading';

import Filter from './Filter';
import SportingGoodItem from './SportingGoodItem.js';

import theme from '../../theme.js';

class SportingGoods extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchSportingGoods();
  }

  render() {
    const { sportingGoods, navigation, actions } = this.props;

    if (!sportingGoods.results || !sportingGoods.results.length) {
      return <Loading/>;
    }

    return (
      <View style={ styles.container }>
        <Filter actions={ actions } search={ actions.fetchSportingGoods }/>
        <FlatList data={ sportingGoods.results }
                  style={ styles.list }
                  renderItem={ ({ item }) => <SportingGoodItem { ...item } navigation={ navigation }/> }
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

export default SportingGoods;
