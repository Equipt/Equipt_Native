import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rentals from './components/Rentals';

import * as rentalActions from './../Rental/actions.js';

const mapStateToProps = ({ session }) => ({
  rentals: session.rentals
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...rentalActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Rentals);
