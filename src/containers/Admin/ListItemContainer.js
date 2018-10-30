import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { removePortfolioItemUrl } from 'config';
import { removePortfolioItem } from 'actions';
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
    axios.post(removePortfolioItemUrl, {id})
      .then(response => {
        let error = response.data.error;
        if(!error) {
          removePortfolioItem({type, id});
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
  removePortfolioItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  {
    removePortfolioItem
  }
)(ListItemContainer);
