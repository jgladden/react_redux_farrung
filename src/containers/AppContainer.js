import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPortfolioItems } from '../actions';
import { connect } from 'react-redux';
import App from 'components/App/';

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchPortfolioItems();
  }

  render() {
    return (
      <App 
        primarySection={this.props.primarySection}
      />
    );
  }
}

AppContainer.propTypes = {
  fetchPortfolioItems: PropTypes.func.isRequired,
  primarySection: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  primarySection: state.section.primary
});

export default connect(
  mapStateToProps,
  {
    fetchPortfolioItems
  }
)(AppContainer);
