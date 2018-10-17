import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitAuth } from '../actions';
import Auth from '../components/Auth';

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, 
  {
    submitAuth
  }
)(Auth);
