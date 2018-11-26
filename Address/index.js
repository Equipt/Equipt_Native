import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Address from './components/Address';

import * as sessionActions from '../Session/actions.js';
import * as addressActions from './actions.js';

const mapStateToProps = ({ session, form__address }) => ({
  session,
  form__address
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...addressActions,
    ...sessionActions
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
