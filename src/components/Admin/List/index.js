import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import Error from 'components/Error';
import ItemContainer from 'containers/Admin/List/ItemContainer';
import FilterContainer from 'containers/Admin/List/FilterContainer';

const List = props => {
  const {
    filteredItems,
    admin: {
      fetching,
      error,
      success
    }
  } = props;

  return (
    <div id='adminList'>
      <p id='adminList__heading'>Admin Portfolio List</p>
      {fetching &&
        <Loading />
      }
      {error &&
        <Error error={error} />
      }
      {success &&
        <React.Fragment>
          <FilterContainer />
          <ul id='adminList__items'>
            {Object.keys(filteredItems).map(id => (
              <ItemContainer
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
  filteredItems: PropTypes.object.isRequired,
  admin: PropTypes.shape({
    fetching: PropTypes.bool,
    error: PropTypes.bool,
    success: PropTypes.bool
  }).isRequired
};

export default List; 
