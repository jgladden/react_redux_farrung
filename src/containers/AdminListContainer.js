import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSection, fetchPortfolio } from '../actions'
import AdminList from '../components/AdminList/';

class AdminListContainer extends Component {
  componentDidMount() {
    this.props.fetchPortfolio();
  }

  render() {
    const {
      portfolio,
      setSection
    } = this.props;
    return (
      <AdminList
        portfolio={portfolio}
        setSection={setSection}
      />
    );
  }

}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  {
    setSection,
    fetchPortfolio
  }
)(AdminListContainer);
