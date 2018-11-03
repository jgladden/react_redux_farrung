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
        section={this.props.section}
      />
    );
  }
}

AppContainer.propTypes = {
  fetchPortfolioItems: PropTypes.func.isRequired,
  section: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  section: state.section
});

export default connect(
  mapStateToProps,
  {
    fetchPortfolioItems
  }
)(AppContainer);
