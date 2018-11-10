import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPortfolio } from 'actions';
import Website from 'components/Website';
import Loading from 'components/Loading';
import PageNotFound from 'components/PageNotFound';

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
    const {
      urlParts
    } = this.props;

    let {
      DetailContainer
    } = this.state;

    if(urlParts.length === 0)
      return(<Loading />);
  
    if(urlParts[0] !== 'portfolio')
      return(<PageNotFound />);

    let detailClass = urlParts[2] ? 
      'detailView' : '';

    return (
      <Website
        DetailContainer={DetailContainer || Loading}
        detailClass={detailClass}
      />
    );
  }
}

WebsiteContainer.propTypes = {
  urlParts: PropTypes.array.isRequired,
  fetchPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  urlParts: state.route.urlParts
});

export default connect(
  mapStateToProps,
  {
    fetchPortfolio
  }
)(WebsiteContainer);
