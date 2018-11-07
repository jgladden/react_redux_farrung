import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAdmin } from 'actions';
import { connect } from 'react-redux';
import Admin from 'components/Admin';

class AdminContainer extends Component {
  componentDidMount() {
    this.props.fetchAdmin();
  }

  render() {
    return (
      <Admin
        isAuthenticated={this.props.isAuthenticated}
        urlParts={this.props.urlParts}
      />
    );
  }
}

AdminContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  urlParts: PropTypes.array.isRequired,
  fetchAdmin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  urlParts: state.route.urlParts
});

export default connect(
  mapStateToProps, 
  {
    fetchAdmin
  }
)(AdminContainer);
