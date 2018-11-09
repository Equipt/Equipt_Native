import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OwnersSportingGoods from './components/OwnersSportingGoods';
import * as sportingGoodsActions from './actions.js';

const mapStateToProps = ({ sportingGoods }) => ({
  sportingGoods
});

const mapDispatchToProps = dispatch => {

  const actions = bindActionCreators({
    ...sportingGoodsActions
  }, dispatch);

  actions.fetchSportingGoods();

  return {
    actions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnersSportingGoods);
