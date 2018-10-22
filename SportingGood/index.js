import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SportingGood from './components/SportingGood';

import * as sportingGoodActions from './actions.js';
import * as rentalActions from '../Rental/actions.js';

const mapStateToProps = ({ sportingGood, rental }) => ({
  sportingGood,
  rental 
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...sportingGoodActions,
    ...rentalActions
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SportingGood);
