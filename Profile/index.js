import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from './components/Profile';

import * as sessionActions from './../Session/actions.js';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...sessionActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
