import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListItemContainer from 'containers/Website/Portfolio/ListItemContainer';
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
        <ListItemContainer
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

export default PortfolioList;
