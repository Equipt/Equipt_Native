import React, { Component } from 'react';
import { View } from 'react-native';

export default class Session extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchCurrentUser();
  }

  render() {
    const { session, signedInComponent, signOutComponent } = this.props;
    return session ? signedInComponent : signOutComponent;
  }

}
