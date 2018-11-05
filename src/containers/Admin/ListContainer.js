import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSection } from 'actions';
import List from 'components/Admin/List';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentType: 'online',
      displayArchiveItems: false,
      filteredItems: {}
    };
  }

  filterItems = () => {
    const {
      portfolio: {
        items
      }
    } = this.props;
    const {
      currentType,
      displayArchiveItems
    } = this.state;
    if(!items) return {};
    let itemsFilteredByType = items[currentType];
    if(displayArchiveItems) return itemsFilteredByType;
    return Object.keys(itemsFilteredByType)
      .filter(key =>
        itemsFilteredByType[key].display === '1'
      )
      .reduce((obj, key) => {
        obj[key] = itemsFilteredByType[key];
        return obj;
      }, {});
  }

  setCurrentType = type => {
    if(type !== this.state.currentType)
      this.setState({
        currentType: type,
        filteredItems: this.filterItems()
      });
  }  

  setDisplayArchiveItems = e => {
    const displayArchiveItems = e.target.checked;
    if(displayArchiveItems !== this.state.displayArchiveItems)
      this.setState({
        displayArchiveItems,
        filteredItems: this.filterItems()
      });
  }

  render() {
    const {
      portfolio,
      setSection
    } = this.props;
    const {
      currentType,
      displayArchiveItems
    } = this.state;
    return (
      <List
        currentType={currentType}
        setCurrentType={this.setCurrentType}
        displayArchiveItems={displayArchiveItems}
        setDisplayArchiveItems={this.setDisplayArchiveItems}
        portfolio={portfolio}
        setSection={setSection}
        filteredItems={this.filterItems()}
      />
    );
  }
}

ListContainer.propTypes = {
  setSection: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired
};  

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  {
    setSection
  }
)(ListContainer);
