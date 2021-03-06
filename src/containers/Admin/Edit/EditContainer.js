import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilteredAdminItems } from 'reducers';
import { setSortBy } from 'actions';
import Edit from 'components/Admin/Edit';

class EditContainer extends Component {

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
      <Edit
        filteredItems={this.props.filteredItems}
        admin={this.props.admin}
        setSort={this.setSort}
      />
    );
  }
}

EditContainer.propTypes = {
  setSortBy: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  filteredItems: PropTypes.array.isRequired
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
)(EditContainer);
