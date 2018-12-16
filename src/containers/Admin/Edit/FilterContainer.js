import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  setDisplayType, 
  setDisplayArchived,
  setPage,
  setItemsPerPage 
} from 'actions';
import { 
  getPageSelectOptions
} from 'reducers';
import Filter from 'components/Admin/Edit/Filter';

const itemsPerPageOptions = ['10','20','50'].map(num => (
  <option key={num} value={num}>{num}</option>
));

class FilterContainer extends Component {
  setPage = e => {
    e.preventDefault();
    this.props.setPage(e.target.value);
  }

  setItemsPerPage = e => {
    e.preventDefault();
    this.props.setItemsPerPage(e.target.value);
  }

  render() {
    return (
      <Filter 
        {...this.props} 
        setPage={this.setPage}
        setItemsPerPage={this.setItemsPerPage}
        itemsPerPageOptions={itemsPerPageOptions} 
      />
    );
  }
}

const mapStateToProps = state => ({
  admin: state.admin,
  pageSelectOptions: getPageSelectOptions(state)
});

export default connect(
  mapStateToProps,
  {
    setDisplayType,
    setDisplayArchived,
    setPage,
    setItemsPerPage
  }
)(FilterContainer);
