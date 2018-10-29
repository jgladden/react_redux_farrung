import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import AdminListItem from '../components/AdminListItem';

class AdminListItemContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayEdit: false,
      id: props.id
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    const {
      item_merged
    } = nextProps.portfolio;
    if(item_merged === state.id &&
       state.displayEdit === true
    )  {
      return { displayEdit: false};
    };
    return null;
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
        portfolio={this.props.portfolio}
        {...this.props}
      />
    );
  }
}

AdminListItemContainer.propTypes = {
  portfolio: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  {}
)(AdminListItemContainer);
