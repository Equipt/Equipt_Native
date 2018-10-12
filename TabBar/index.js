import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class TabBar extends Component {

  constructor(props) {
    super(props);
    const { state: { index, routes } } = props.navigation;
    this.state = {
      currentTab: routes[index]
    }
  }

  componentWillReceiveProps(newProps) {
    const { state: { index, routes } } = newProps.navigation;
    this.setState({ currentTab: routes[index] });
  }

  render() {

    const { navigate } = this.props.navigation;
    const { currentTab } = this.state;

    return (
      <View style={ styles.wrapper }>
        <TouchableOpacity style={[ styles.tab, currentTab.key === 'Login' && styles.disabled ]} onPress={ () => navigate('Login') }>
          <Text style={ styles.text }>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[ styles.tab, currentTab.key === 'Register' && styles.disabled ]} onPress={ () => navigate('Register') }>
          <Text style={ styles.text }>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tab: {
    flex: 1,
    borderColor: '#000',
    padding: 20,
    backgroundColor: '#5C9059',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD'
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  disabledBtn: {
    opacity: 0.5
  }
});
