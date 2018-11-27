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
      username,
      fetchAdmin
    } = this.props;
    if(username)
      fetchAdmin();
  }

  componentDidUpdate(prevProps) {
    const {
      username,
      fetchAdmin
    } = this.props;
    if(username && 
       !prevProps.username
    ) fetchAdmin();
  }

  render() {
    const {
      urlParts,
      username
    } = this.props;

    if(!username)
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
  username: PropTypes.string,
  urlParts: PropTypes.array.isRequired,
  fetchAdmin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  username: state.auth.username,
  urlParts: state.route.urlParts
});

export default connect(
  mapStateToProps, 
  {
    fetchAdmin
  }
)(AdminContainer);
