import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import closeIcon from '../../assets/close.png';

const Notification = ({ isOpen, error, info, actions, customStyles = {} } = {}) => {

  const styles = getStyles(customStyles);

  if (!isOpen) return null;

  if (error) {
    return (
      <View style={[styles.wrapper, styles.error]}>
        <TouchableOpacity style={ styles.closeWrapper } onPress={ actions.closeNotification }>
          <Image style={ styles.closeIcon } source={ closeIcon }/>
        </TouchableOpacity>
        <Text style={[styles.text, styles.errorText]}>{ typeof error === 'string' ? error : error.join('\n') }</Text>
      </View>
    )
  }

  if (info) {
    return (
      <View style={[styles.wrapper, styles.info]}>
        <TouchableOpacity style={ styles.closeWrapper } onPress={ actions.closeNotification }>
          <Image style={ styles.closeIcon } source={ closeIcon }/>
        </TouchableOpacity>
        <Text style={[styles.text, styles.infoText]}>{ typeof info === 'string' ? info : info.join('\n') }</Text>
      </View>
    )
  }

  return null;

}

const getStyles = customStyles => (
  StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 35,
      minHeight: 50,
      padding: 10,
    },
    closeWrapper: {
      position: 'absolute',
      zIndex: 1,
      right: 5,
      top: 5,
      width: 20,
      height: 20
    },
    closeIcon: {
      width: 15,
      height: 15
    },
    text: {
      textAlign: 'center'
    },
    errorContainer: {
      backgroundColor: '#EFDFDE'
    },
    errorText: {
      color: '#a94442'
    },
    info: {
      backgroundColor: '#dff0d8'
    },
    infoText: {
      color: '#5C9059'
    },
    ...customStyles
  })
);

export default Notification;
