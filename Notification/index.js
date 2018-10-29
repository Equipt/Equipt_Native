import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Notification from './components/Notification';
import * as notificationActions from './actions.js';

const mapStateToProps = state => ({
  ...state.notification
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...notificationActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
