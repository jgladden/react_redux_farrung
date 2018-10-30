import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSection } from 'actions';
import List from 'components/Admin/List';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {type: 'online'};
  }

  setType = type => {
    this.setState({type});
  }  

  render() {
    const {
      portfolio,
      setSection
    } = this.props;
    return (
      <List
        type={this.state.type}
        setType={this.setType}
        portfolio={portfolio}
        setSection={setSection}
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
