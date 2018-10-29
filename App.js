import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, NavigationActions } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import algoliaSearch from 'algoliasearch';

import theme from './theme.js';

import TabBar from './TabBar';
import { Home } from './Home';
import Profile from './Profile';
import Session from './Session';
import SportingGood from './SportingGood';
import SportingGoods from './SportingGoods';
import Login from './Login';
import Loading from './Loading';
import Register from './Register';
import Rentals from './Rentals';
import Rental from './Rental';
import Notification from './Notification';

import reducers from './reducers.js';
import Api from './Api.js';

const api = new Api(process.env.API_URL);

let _navigator;

// Setup Naviatiors
const SignedOutNavigator = createStackNavigator({
  Home,
  Login,
  Register
}, {
  initialRouteName: 'Home',
  animationEnabled: true,
  swipeEnabled: true,
  navigationOptions: {
   header: <Notification customStyles={{
     wrapper: {
       position: 'absolute',
       zIndex: 2,
       top: 0,
       left: 0,
       width:  '100%',
       height: 80,
       paddingTop: 45,
       minHeight: 50,
       backgroundColor: '#EFDFDE'
     },
     closeIcon: {
       top: 40,
       width: 15,
       height: 15
     }
   }}/>
 }
});

const SignedInNavigator = createBottomTabNavigator({
  SportingGoods,
  SportingGood,
  Profile,
  Rentals,
  Rental
}, {
  initialRouteName: 'SportingGoods',
  tabBarPosition: "bottom",
  tabBarComponent: props => <TabBar { ...props } isSignedIn={ true }/>,
  animationEnabled: true,
  swipeEnabled: true
});

// Navigation method
const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName,
      params,
    }),
  );
}

// Setup angolia search
const algoliaClient = algoliaSearch(process.env.AGOLIA_ID, process.env.AGOLIA_SEARCH_ONLY_KEY);

// Middleware arguments
const middleware = { api, algoliaClient, navigate };

// Thunk setup
const thunkMiddleware = thunk.withExtraArgument(middleware);

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
        <Session
          signedInComponent={ <SignedInNavigator ref={ navRef => _navigator = navRef }/> }
          signOutComponent={ <SignedOutNavigator ref={ navRef => _navigator = navRef }/> }/>
      </Provider>
    )
  }
}
