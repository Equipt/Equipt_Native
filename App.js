import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import theme from './theme.js';

import { TabBar } from './TabBar';
import { Home } from './Home';
import Login from './Login';
import Register from './Register';

import session from './Session/reducer.js';

const store = createStore(
  combineReducers({
    session
  }),
  applyMiddleware(thunk)
);

const Navigator = createBottomTabNavigator({
  Home,
  Login,
  Register
}, {
  initialRouteName: 'Home',
  tabBarComponent: props => <TabBar { ...props }/>,
  tabBarPosition: "bottom"
});

export default class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Navigator/>
      </Provider>
    )
  }

}
