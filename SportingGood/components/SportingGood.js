import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme.js';
import ImageSlider from 'react-native-image-slider';

import Loading from '../../Loading';

import backArrowIcon from '../../assets/back-arrow.png';

export default class SportingGood extends Component {

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

  checkAvailability() {

  }

  render() {

    const { sportingGood = {}, navigation, actions } = this.props;
    const { images = [], title, brand, description, pricePerDay } = sportingGood;

    if(!Object.keys(sportingGood).length) {
      return <Loading/>;
    }

    return (
      <View>
        <TouchableOpacity style={ styles.backIconContainer } onPress={ () => navigation.navigate('SportingGoods') }>
          <Image source={ backArrowIcon } style={ styles.backIcon }/>
        </TouchableOpacity>
        <ImageSlider
          style={{
            flex: 0,
            width: '100%',
            height: 200
          }}
          images={ images.map(image => image.file.url) }
          customSlide={({ index, item, style, width }) => {
            const url = process.env.BASE_URL + item;
            return (
              <Image key={ index } source={{ uri: url }} style={ {width: 360, height: 270 }} />
            );
          }}
        />
        <View style={ styles.container }>
          <Text style={ styles.title }>{ title }</Text>
          <Text style={ styles.brand }>{ brand }</Text>
          <Text style={ styles.desc }>{ description }</Text>
          <Text style={ styles.price }>${ pricePerDay } per day</Text>
          <TouchableOpacity onPress={ () => this.checkAvailability() }>
            <Text style={[styles.successBtn, styles.checkAvailabilityBtn]}>Check Availability</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 22,
    fontWeight: 'bold'
  },
  brand: {
    marginTop: 5
  },
  desc: {
    marginTop: 10
  },
  price: {
    fontSize: 16,
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
  checkAvailabilityBtn: {
    marginTop: 20
  }
});
