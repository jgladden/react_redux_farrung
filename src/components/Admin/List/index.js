import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import Error from 'components/Error';
import ListItemContainer from 'containers/Admin/ListItemContainer';

const List = ({setSection, setType, type, portfolio}) => {
  const {
    fetching,
    error,
    items
  } = portfolio;

  let portfolioLoaded = items && type ? true : false;
  let itemsByType = portfolioLoaded ? items[type] : [];

  return (
    <div id='adminList'>
      <p id='adminList__heading'>Admin Portfolio List</p>
      {fetching === 1 &&
        <Loading />
      }
      {error &&
        <Error error={error} />
      }
      {portfolioLoaded &&
        <React.Fragment>
          <ul id='adminList__typenav'>
            {Object.keys(items).map(ptype => (
              <li 
                key={ptype}
                className={ptype === type ? 'selected' : ''}
                onClick={() => setType(ptype)}
              >{ptype}</li>
            ))}
          </ul>
          <ul id='adminList__items'>
            {Object.keys(itemsByType).map(id => (
              <ListItemContainer
                key={id}
                {...itemsByType[id]}
              />
            ))}
          </ul>
        </React.Fragment>
      }
    </div>
  );
};

List.propTypes = {
  setSection: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  type: PropTypes.string,
  portfolio: PropTypes.shape({
    fetching: PropTypes.number,
    error: PropTypes.string,
    items: PropTypes.object
  })
};

export default List; 
