import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../actions';
import Admin from '../components/Admin';

class AdminContainer extends Component {
  componentDidMount() {
    this.props.fetchPortfolio();
  }
  render() {
    return(
      <Admin
        isAuthenticated={this.props.isAuthenticated}
        section={this.props.section}
      />
    );
  }
}

AdminContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  section: PropTypes.object.isRequired,
  fetchPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  section: state.section
});

export default connect(
  mapStateToProps, 
  {
    fetchPortfolio
  }
)(AdminContainer);
