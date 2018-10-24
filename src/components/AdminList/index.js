import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import Error from '../Error';
import AdminListItem from '../AdminListItem';

const AdminList = ({setSection, setType, type, portfolio}) => {
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
              <AdminListItem
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

AdminList.propTypes = {
  setSection: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  type: PropTypes.string,
  portfolio: PropTypes.shape({
    fetching: PropTypes.number,
    error: PropTypes.string,
    items: PropTypes.object
  })
};

export default AdminList; 
