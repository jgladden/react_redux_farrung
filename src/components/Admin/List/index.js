import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/common/pages/Loading';
import Error from 'components/common/pages/Error';
import ItemContainer from 'containers/Admin/List/ItemContainer';
import FilterContainer from 'containers/Admin/List/FilterContainer';

const List = props => {
  const {
    filteredItems,
    admin: {
      fetching,
      error,
      success
    },
    setSort,
  } = props;

  return (
    <div id='adminList'>
      {fetching &&
        <Loading />
      }
      {error &&
        <Error error={error} />
      }
      {success &&
        <React.Fragment>
          <FilterContainer />
          <p id='adminList__heading'>
          List Portfolio Items
          </p>
          <ul id='listHeader'>
            <li id='listHeader__edit'>
            EDIT
            </li>
            <li 
              id='listHeader__rating'
              onClick={() => setSort('rating')}
            >
            RATING
            </li>
            <li
              id='listHeader__title'
              onClick={() => setSort('title')}
            >
            TITLE
            </li>
          </ul>
          <ul className='listItems'>
            {filteredItems.map(item => (
              <ItemContainer
                key={item.id}
                {...item}
              />
            ))}
          </ul>
        </React.Fragment>
      }
    </div>
  );
};

List.propTypes = {
  filteredItems: PropTypes.array.isRequired,
  admin: PropTypes.shape({
    fetching: PropTypes.bool,
    error: PropTypes.string,
    success: PropTypes.bool,
  }).isRequired,
  setSort: PropTypes.func.isRequired
};

export default List; 
