import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme.js';
import Loading from '../../Loading';

class Rental extends Component {

  componentWillMount() {
    const { navigation, actions } = this.props;
    const hash = navigation.getParam('rental_hash');
    actions.findRental(hash);
  }

  componentDidUpdate(newProps) {
    const { navigation, actions, rental } = this.props;
    const oldHash = rental.hashId;
    const hash = navigation.getParam('rental_hash');
    if (oldHash && hash !== oldHash) {
      actions.findRental(hash);
    }
  }

  render() {

    const { rental } = this.props;

    if (!rental) return <Loading/>;

    console.log(rental.timeTo);

    return (
      <View style={ styles.container }>
        <Text>{ rental.sportingGood.title }</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme
});

export default Rental;
