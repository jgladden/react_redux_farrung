import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from 'components/Admin/ListItem';

class ListItemContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayEdit: false
    };
  }

  componentDidUpdate() {
    const {
      portfolio: { edit },
      id
    } = this.props; 
    if(!edit || edit.id !== id) 
      return;
    const {
      status
    } = this.state;
    if(edit.status === 'posting' && 
       status !== 'posting'
    )
      this.setState({
        status: edit.status
      });
    if(edit.status === 'success' && 
       status === 'posting'
    )
      this.setState({
        status: edit.status, 
        displayEdit: false
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
        portfolio={this.props.portfolio}
        {...this.props}
      />
    );
  }
}

ListItemContainer.propTypes = {
  portfolio: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  {}
)(ListItemContainer);
