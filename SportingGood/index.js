import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SportingGood from './components/SportingGood';

import * as sportingGoodActions from './actions.js';

const mapStateToProps = state => ({
  sportingGood: state.sportingGood
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...sportingGoodActions
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SportingGood);
