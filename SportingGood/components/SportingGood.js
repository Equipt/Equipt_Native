import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import theme from '../../theme.js';

import Loading from '../../Loading';
import Slider from './Slider';
import RentalSelection from './RentalSelection';
import RatingsList from './RatingsList';

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
    const { images = [], rentals, ratings, age, title, brand, model, description, pricePerDay, slug, coordinates, totalRatings } = sportingGood;

    if(!Object.keys(sportingGood).length) {
      return <Loading/>;
    }

    console.log(sportingGood);

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <TouchableOpacity style={ styles.backIconContainer } onPress={ () => navigation.navigate('SportingGoods') }>
            <Image source={ backArrowIcon } style={ styles.backIcon }/>
          </TouchableOpacity>
          <Slider images={ images }/>
          {/* Basic Info Section */}
          <View style={ styles.container }>
            <Text style={ styles.title }>{ title }</Text>
            <Text style={ styles.brand }>{ brand }</Text>
            <Text style={ styles.brand }>{ model }</Text>
            <Text style={ styles.desc }>{ description }</Text>
          </View>
          {/* Vps Section */}
          <View style={ styles.vpsContainer }>
            <View style={ styles.vp }>
              <Text style={ styles.vpText }>${pricePerDay}</Text>
              <Text style={ styles.vpText }>Price</Text>
            </View>
            <View style={ styles.vp }>
              <Text style={ styles.vpText }>{totalRatings}</Text>
              <Text style={ styles.vpText }>Ratings</Text>
            </View>
            <View style={ styles.vp }>
              <Text style={ styles.vpText }>{age}</Text>
              <Text style={ styles.vpText }>Age</Text>
            </View>
          </View>
          {/* Map Section */}
          <MapView
          style={ styles.map }
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          pitchEnabled={ false }
          rotateEnabled={ false }
          scrollEnabled={ false }
          zoomEnabled={ false }
          customMapStyle={ mapStyles }
          />
          <RatingsList ratings={ratings}/>
        </ScrollView>
        {/* Bottom Bar */}
        <View style={ styles.bottomBar }>
          <Text style={ styles.price }>${ pricePerDay } per day</Text>
          <TouchableOpacity   onPress={ () => this.setState({ datePickerIsVisible: true }) }>
            <Text style={[styles.successBtn, styles.rentBtn]}>Select Dates</Text>
          </TouchableOpacity>
        </View>
        {/* Select dates modal */}
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
    marginTop: 20,
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
  },
  map: {
    width: '100%',
    height: 200
  },
  vpsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  vp: {
    width: 70,
    paddingBottom: 15,
  },
  vpText: {
    textAlign: 'center',
    color: '#484848',
    fontWeight: 'bold'
  }


});

const mapStyles = [
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#aee2e0"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#abce83"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#769E72"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#7B8758"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#EBF4A4"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#8dab68"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#5B5B3F"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ABCE83"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#A4C67D"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#9BBF72"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#EBF4A4"
          }
      ]
  },
  {
      "featureType": "transit",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#87ae79"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#7f2200"
          },
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "visibility": "on"
          },
          {
              "weight": 4.1
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#495421"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  }
]
