import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import AdminListItem from '../components/AdminListItem';

class AdminListItemContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayEdit: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      id
    } = this.props;
    if(nextProps.portfolio.item_merged === id &&
       this.state.displayEdit === true
    ) {
      this.setState({displayEdit: false});
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
