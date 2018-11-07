import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPortfolio } from 'actions';
import Website from 'components/Website';

class WebsiteContainer extends Component {
  state = { };

  componentDidMount() {
    this.props.fetchPortfolio();
    import(/* webpackChunkName: 'DetailContainer' */ './Portfolio/DetailContainer')
    .then(DetailContainer => {
      this.setState({ DetailContainer: DetailContainer.default });
    });
  }

  render() {
    return (
      <Website
        DetailContainer={this.state.DetailContainer}
        {...this.props.section}
      />
    );
  }
}

WebsiteContainer.propTypes = {
  section: PropTypes.object.isRequired,
  fetchPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  section: state.section
});

export default connect(
  mapStateToProps,
  {
    fetchPortfolio
  }
)(WebsiteContainer);
