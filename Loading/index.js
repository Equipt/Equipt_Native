import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../theme.js';
import loadingGif from '../assets/loading.gif';

const Loading = () => (
  <View style={ styles.container }>
    <Image source={ loadingGif } style={ styles.loading }/>
  </View>
);

const styles = StyleSheet.create({
  ...theme,
  loading: {
    width: 50,
    height: 50
  }
});

export default Loading;
