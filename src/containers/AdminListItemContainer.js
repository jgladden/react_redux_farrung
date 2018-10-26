import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminListItem from '../components/AdminListItem';

class AdminListItemContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayEdit: false
    };
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
      <AdminListItem
        displayEdit={this.state.displayEdit}
        toggleEditDisplay={this.toggleEditDisplay}
        {...this.props}
      />
    );
  }
}

export default AdminListItemContainer;
