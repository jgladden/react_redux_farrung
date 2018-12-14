import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilteredAdminItems } from 'reducers';
import { setSortBy } from 'actions';
import List from 'components/Admin/List';

class ListContainer extends Component {
  setSort = newSortBy => {
    const {
      setSortBy,
      admin: {
        sortOrder,
        sortBy
      }
    } = this.props;

    if(sortBy !== newSortBy) {
      setSortBy({
        sortBy: newSortBy,
        sortOrder: 'ascending'
      });
    } else {
      let order = sortOrder === 'descending' ? 
        'ascending' : 'descending';
      setSortBy({
        sortBy,
        sortOrder: order
      }); 
    }
  }

  render() {
    return (
      <List
        filteredItems={this.props.filteredItems}
        admin={this.props.admin}
        setSort={this.setSort}
      />
    );
  }
};

const mapStateToProps = state => ({
  filteredItems: getFilteredAdminItems(state),
  admin: state.admin
});

export default connect(
  mapStateToProps,
  {
    setSortBy
  }
)(ListContainer);
