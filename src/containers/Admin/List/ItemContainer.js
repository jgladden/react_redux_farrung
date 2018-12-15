import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { removeAdminItemUrl } from 'config';
import { removeAdminItem } from 'actions';
import { getJwtHeader } from 'utils/authUtil';
import Item from 'components/Admin/List/Item';

class ListItemContainer extends Component {
  state = {
    displayEdit: false
  }

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

  toggleEditDisplay = () => {
    let {
      displayEdit
    } = this.state; 
    this.setState({
      displayEdit: !displayEdit
    });
  }

  render() {
    return (
      <Item
        displayEdit={this.state.displayEdit}
        toggleEditDisplay={this.toggleEditDisplay}
        deleteItem={this.deleteItem}
        admin={this.props.admin}
        {...this.props}
      />
    );
  }
}

ListItemContainer.propTypes = {
  admin: PropTypes.object.isRequired,
  removeAdminItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect(
  mapStateToProps,
  {
    removeAdminItem
  }
)(ListItemContainer);
