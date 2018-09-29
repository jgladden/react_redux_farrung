import React from 'react';
import { connect } from 'react-redux';
import { fetchPortfolioType, removePortfolioItem } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removePortfolioItem: id => {
      dispatch(removePortfolioItem({id}))
    },
    fetchPortfolioType: type => {
      dispatch(fetchPortfolioType(type))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
