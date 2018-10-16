import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme.js';

const Loading = () => (
  <View style={ styles.container }>
    <Text>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  ...theme
});

export default Loading;
