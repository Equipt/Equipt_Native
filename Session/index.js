import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Session from './components/Session';

import * as sessionActions from './actions.js';
import * as notificationActions from './../Notification/actions.js';

const mapStateToProps = state => ({
  session: state.session,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...sessionActions,
    ...notificationActions
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
