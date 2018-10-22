import React from 'react';
import { Image } from 'react-native';
import ImageSlider from 'react-native-image-slider';

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
        <Image key={ index } source={{ uri: url }} style={ {width: 360, height: 270 }} />
      );
    }}
  />
)

export default Slider;
