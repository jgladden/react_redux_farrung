import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAdmin } from 'actions';
import { connect } from 'react-redux';
import Admin from 'components/Admin';
import Loading from 'components/common/pages/Loading';
import NotAuthorized from 'components/Auth/NotAuthorized';

class AdminContainer extends Component {
  componentDidMount() {
    const {
      token,
      fetchAdmin
    } = this.props;
    if(token)
      fetchAdmin(token);
  }

  componentDidUpdate(prevProps) {
    const {
      token,
      fetchAdmin
    } = this.props;
    if(token && 
       !prevProps.token
    ) fetchAdmin(token);
  }

  render() {
    const {
      urlParts,
      token
    } = this.props;

    if(!token)
      return(<NotAuthorized />);

    if(urlParts.length === 0)
      return(<Loading />);
  
    return (
      <Admin
        subpage={urlParts[1]}
      />
    );
  }
}

AdminContainer.propTypes = {
  token: PropTypes.string,
  urlParts: PropTypes.array.isRequired,
  fetchAdmin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  urlParts: state.route.urlParts
});

export default connect(
  mapStateToProps, 
  {
    fetchAdmin
  }
)(AdminContainer);
