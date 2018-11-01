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
    setSection
  } = props;

  if(fetching) 
    return (<Loading />);

  if(error)
    return (<Error error={error} />);
  
  const itemIds = Object.keys(items);

  return (
    <div id="portfolioList">
      <h1>Portfolio / {type}</h1>
      {itemIds.length ? (
        <ul>
          {itemIds.map(id => (
            <ListItem
              key={id}
              {...items[id]}
              handleClick={() => setSection({primary: 'portfolio', secondary: type, tertiary: id})}
            />
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

PortfolioList.propTypes = {
  type: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.number
};

export default PortfolioList;
