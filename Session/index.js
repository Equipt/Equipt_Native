import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Session from './components/Session';

import * as sessionActions from './actions.js';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...sessionActions
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
