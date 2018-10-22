import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import theme from '../../theme.js';

import Loading from '../../Loading';
import Slider from './Slider';
import RentalSelection from './RentalSelection';

import backArrowIcon from '../../assets/back-arrow.png';

export default class SportingGood extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datePickerIsVisible: false
    }
  }

  componentWillMount() {
    const { navigation, actions } = this.props;
    const slug = navigation.getParam('slug');
    actions.fetchSportingGood(slug);
  }

  componentDidUpdate(newProps) {
    const { navigation, actions, sportingGood } = this.props;
    const oldSlug = sportingGood.slug;
    const slug = navigation.getParam('slug');
    if (oldSlug && slug !== oldSlug) {
      actions.fetchSportingGood(slug);
    }
  }

  render() {

    const { datePickerIsVisible } = this.state;
    const { sportingGood = {}, rental, navigation, actions } = this.props;
    const { images = [], rentals, title, brand, model, description, pricePerDay, slug } = sportingGood;

    if(!Object.keys(sportingGood).length) {
      return <Loading/>;
    }

    console.log(sportingGood);

    return (
      <View>
        <TouchableOpacity style={ styles.backIconContainer } onPress={ () => navigation.navigate('SportingGoods') }>
          <Image source={ backArrowIcon } style={ styles.backIcon }/>
        </TouchableOpacity>
        <Slider images={ images }/>
        <View style={ styles.container }>
          <Text style={ styles.title }>{ title }</Text>
          <Text style={ styles.brand }>{ brand }</Text>
          <Text style={ styles.brand }>{ model }</Text>
          <Text style={ styles.desc }>{ description }</Text>
        </View>
        {/* Bottom Bar */}
        <View style={ styles.bottomBar }>
          <Text style={ styles.price }>${ pricePerDay } per day</Text>
          <TouchableOpacity   onPress={ () => this.setState({ datePickerIsVisible: true }) }>
            <Text style={[styles.successBtn, styles.rentBtn]}>Select Dates</Text>
          </TouchableOpacity>
        </View>
        <RentalSelection { ...this.props }
          isVisible={ datePickerIsVisible }
          sportingGood={ sportingGood }
          rental={ rental }
          rentals={ rentals }
          onClose={ () => this.setState({ datePickerIsVisible: false }) }
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  ...theme,
  container: {
    margin: 20
  },
  title: {
    color: '#484848',
    fontSize: 22,
    fontWeight: 'bold'
  },
  brand: {
    color: '#484848',
    marginTop: 5
  },
  desc: {
    color: '#484848',
    marginTop: 10
  },
  price: {
    color: '#484848',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  sliderContainer: {
    height: 200,
    maxHeight: 200
  },
  backIconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  bottomBar: {
    position: 'absolute',
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 80,
    width: '100%',
    top: Dimensions.get('window').height - 150,
    left: 0,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#EEEEEE',
  },
  rentBtn: {
    marginTop: 10,
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
  }
});
