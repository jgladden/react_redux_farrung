import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRoute } from 'actions';
import ListItem from 'components/Website/Portfolio/ListItem';

class ListItemContainer extends Component {
  render() {
    const {
      item,
      setRoute
    } = this.props;

    return (
      <ListItem
        item={item}
        setRoute={setRoute}
      />
    );
  }
}

ListItemContainer.propTypes = {
  item: PropTypes.object.isRequired,
  setRoute: PropTypes.func.isRequired
};
  

export default connect(
  null,
  {
    setRoute
  }
)(ListItem);
