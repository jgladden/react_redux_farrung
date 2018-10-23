import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSection, fetchPortfolio } from '../actions';
import AdminList from '../components/AdminList/';

class AdminListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPortfolio();
  }

  componentDidUpdate(prevProps) {
    const {
      items
    } = this.props.portfolio;
    if(items && !prevProps.portfolio.items) {
      let type = Object.keys(items)[0]; 
      this.setState({type});
    }
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
      <AdminList
        type={this.state.type}
        setType={this.setType}
        portfolio={portfolio}
        setSection={setSection}
      />
    );
  }
}

AdminListContainer.propTypes = {
  fetchPortfolio: PropTypes.func.isRequired,
  setSection: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired
};  

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
