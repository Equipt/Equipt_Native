import React, { Component } from 'react';
import { View } from 'react-native';
import Loading from '../../Loading';

export default class Session extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchCurrentUser();
  }

  render() {
    const { session,
            loading,
            signedInComponent,
            signOutComponent
          } = this.props;

    if (loading) return <Loading/>;
    return session ? signedInComponent : signOutComponent;
  }

}
