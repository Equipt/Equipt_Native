import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import theme from './theme.js';

import TabBar from './TabBar';
import { Home } from './Home';
import Profile from './Profile';
import Session from './Session';
import SportingGoods from './SportingGoods';
import Login from './Login';
import Loading from './Loading';
import Register from './Register';

import reducers from './reducers.js';
import Api from './Api.js';

const api = new Api('https://www.equipt.rentals/api');

// Setup Naviatiors
const SignedOutNavigator = createBottomTabNavigator({
  Home,
  Login,
  Register
}, {
  initialRouteName: 'Home',
  tabBarComponent: props => <TabBar { ...props } isSignedIn={ false }/>,
  tabBarPosition: "bottom"
});

const SignedInNavigator = createBottomTabNavigator({
  SportingGoods,
  Profile
}, {
  initialRouteName: 'SportingGoods',
  tabBarComponent: props => <TabBar { ...props } isSignedIn={ true }/>,
  tabBarPosition: "bottom"
});

// Thunk setup
const thunkMiddleware = thunk.withExtraArgument({api});

// Create Store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Session signedInComponent={ <SignedInNavigator/> } signOutComponent={ <SignedOutNavigator/> }/>
      </Provider>
    )
  }
}
