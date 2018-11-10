import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAdmin } from 'actions';
import { connect } from 'react-redux';
import Admin from 'components/Admin';
import Loading from 'components/Loading';
import PageNotFound from 'components/PageNotFound';
import NotAuthorized from 'components/NotAuthorized';

class AdminContainer extends Component {
  componentDidMount() {
    this.props.fetchAdmin();
  }

  render() {
    const {
      urlParts,
      isAuthenticated
    } = this.props;

    if(isAuthenticated !== true)
      return(<NotAuthorized />);

    if(urlParts.length === 0)
      return(<Loading />);
  
    if(urlParts[0] !== 'admin')
      return(<PageNotFound />);

    return (
      <Admin
        subpage={urlParts[1]}
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
