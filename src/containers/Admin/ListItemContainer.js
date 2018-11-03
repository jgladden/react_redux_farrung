import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { removeAdminItemUrl } from 'config';
import { removeAdminItem } from 'actions';
import ListItem from 'components/Admin/ListItem';

class ListItemContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayEdit: false
    };
  }

  deleteItem = () => {
    const {
      type,
      id,
      removePortfolioItem
    } = this.props;
    axios.post(removeAdminItemUrl, {id})
      .then(response => {
        let error = response.data.error;
        if(!error) {
          removeAdminItem({type, id});
        }
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
      <ListItem
        displayEdit={this.state.displayEdit}
        toggleEditDisplay={this.toggleEditDisplay}
        deleteItem={this.deleteItem}
        portfolio={this.props.portfolio}
        {...this.props}
      />
    );
  }
}

ListItemContainer.propTypes = {
  portfolio: PropTypes.object.isRequired,
  removeAdminItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  {
    removeAdminItem
  }
)(ListItemContainer);
