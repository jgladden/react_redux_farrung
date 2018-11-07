import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/Website/Portfolio/ListItem';
import Loading from 'components/Loading';
import Error from 'components/Error';

const PortfolioList = props => { 
  const {
    type,
    items,
    fetching,
    error,
    setRoute
  } = props;

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
        <ListItem
          key={id}
          {...items[id]}
          handleClick={() => setRoute(`/portfolio/${type}/${id}`)}
        />
      ))}
    </ul>
  );
};

PortfolioList.propTypes = {
  type: PropTypes.string.isRequired,
  setRoute: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.number
};

export default PortfolioList;
