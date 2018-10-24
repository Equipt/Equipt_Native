import React from 'react';
import { Image, Dimensions } from 'react-native';
import ImageSlider from 'react-native-image-slider';

const screenWidth = Dimensions.get('window').width;

const Slider = ({ images = [] }) => (
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
        <Image key={ index } source={{ uri: url }} style={ {width: screenWidth, height: 270 }} />
      );
    }}
  />
)

export default Slider;
