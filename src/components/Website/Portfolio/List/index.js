import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListItemContainer from 'containers/Website/Portfolio/ListItemContainer';
import Loading from 'components/Loading';
import Error from 'components/Error';

const PortfolioList = ({items, fetching, error}) => { 

  if(fetching) 
    return (<Loading />);

  if(error)
    return (<Error error={error} />);

  const ids = Object.keys(items);

  if(!ids.length)
    return(<p>No items found.</p>);

  return (
    <ul id='portfolioThumbnail'>
      {ids.map(id => (
        <ListItemContainer
          key={id}
          item={items[id]}
        />
      ))}
    </ul>
  );
};

PortfolioList.propTypes = {
  items: PropTypes.object.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.number
};

export default PortfolioList;
