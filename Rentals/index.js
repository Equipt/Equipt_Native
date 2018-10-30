import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rentals from './components/Rentals';

import * as rentalsActions from './actions.js';

const mapStateToProps = ({ rentals }) => ({
  rentals
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...rentalsActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Rentals);
