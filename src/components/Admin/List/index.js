import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import Error from 'components/Error';
import ListItemContainer from 'containers/Admin/ListItemContainer';
import ListNav from 'components/Admin/ListNav';

const List = props => {
  const {
    setCurrentType,
    setDisplayArchiveItems,
    currentType,
    displayArchiveItems,
    filteredItems,
    admin: {
      fetching,
      error,
      items: allItems
    }
  } = props;

  return (
    <div id='adminList'>
      <p id='adminList__heading'>Admin Portfolio List</p>
      {fetching === 1 &&
        <Loading />
      }
      {error &&
        <Error error={error} />
      }
      {allItems &&
        <React.Fragment>
          <ListNav
            allItems={allItems}
            setCurrentType={setCurrentType}
            currentType={currentType}
            setDisplayArchiveItems={setDisplayArchiveItems}
            displayArchiveItems={displayArchiveItems}
          />
          <ul id='adminList__items'>
            {Object.keys(filteredItems).map(id => (
              <ListItemContainer
                key={id}
                {...filteredItems[id]}
              />
            ))}
          </ul>
        </React.Fragment>
      }
    </div>
  );
};

List.propTypes = {
  setCurrentType: PropTypes.func.isRequired,
  currentType: PropTypes.string.isRequired,
  setDisplayArchiveItems: PropTypes.func.isRequired,
  displayArchiveItems: PropTypes.bool.isRequired,
  filteredItems: PropTypes.object.isRequired,
  admin: PropTypes.shape({
    fetching: PropTypes.number,
    error: PropTypes.string,
    items: PropTypes.object
  })
};

export default List; 
