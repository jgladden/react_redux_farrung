import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { removeAdminItemUrl } from 'config';
import { removeAdminItem, setCurrentId } from 'actions';
import { getJwtHeader } from 'utils/authUtil';
import Item from 'components/Admin/Edit/Item';

class ItemContainer extends Component {
  deleteItem = () => {
    const {
      type,
      id,
      removeAdminItem
    } = this.props;
    axios.post(removeAdminItemUrl, {id}, getJwtHeader())
      .then(response => {
        let error = response.data.error;
        if(!error)
          removeAdminItem({type, id});
      });
  } 

  render() {
    return (
      <Item
        setCurrentId={this.props.setCurrentId}
        currentId={this.props.currentId}
        deleteItem={this.deleteItem}
        admin={this.props.admin}
        {...this.props}
      />
    );
  }
}

ItemContainer.propTypes = {
  admin: PropTypes.object.isRequired,
  removeAdminItem: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  admin: state.admin,
  currentId: state.admin.currentId
});

export default connect(
  mapStateToProps,
  {
    removeAdminItem,
    setCurrentId
  }
)(ItemContainer);
