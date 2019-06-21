import './styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSortedItems } from 'reducers';
import ListItem from 'components/Website/Portfolio/ListItem/ListItem';
import Loading from 'components/common/pages/Loading';
import Error from 'components/common/pages/Error';

const PortfolioList = ({items, fetching, error}) => { 

  if(fetching) 
    return (<Loading />);

  if(error)
    return (<Error error={error} />);

  if(!items.length)
    return(<p>No items found.</p>);

  return (
    <ul id='portfolioThumbnail'>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};

PortfolioList.propTypes = {
  items: PropTypes.array.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.bool
};

const mapStateToProps = state => ({
  items: getSortedItems(state),
  fetching: state.portfolio.fetching,
  error: state.portfolio.error
});

export default connect(
  mapStateToProps,
  {}
)(PortfolioList);

