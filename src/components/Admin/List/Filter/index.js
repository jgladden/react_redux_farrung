import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'components/common/FormFields/Select';

const ListFilter = props => {
  const {
    admin: {
      items,
      displayType,
      displayArchived,
      page: currentPage,
      itemsPerPage
    },
    pageSelectOptions,
    itemsPerPageOptions,
    setDisplayType, 
    setDisplayArchived,
    setPage,
    setItemsPerPage
  } = props;

  return (
    <div id='filterNav'>
      <div id='filterNav__selectType'>
        <span>Select Type:</span>
        <ul>
          {Object.keys(items).map(type => (
            <li
              key={type}
              className={displayType === type ? 'selected' : ''}
              onClick={() => setDisplayType(type)}
            >{type}</li>
          ))}
        </ul>
      </div>
      <div id='filterNav__setDisplayArchived'>
        <span>Display Archived Items:</span>
        <input
          type='checkbox'
          defaultChecked={displayArchived}
          onChange={e => setDisplayArchived(e.target.checked)}
        />
      </div>
      <div id='filterNav__selectPage'>
        <span>Page: </span>
        <Select
          name='page'
          options={pageSelectOptions}
          value={currentPage}
          handleChange={setPage}
        />
      </div>
      <div id='filterNav__selectItemsPerPage'>
        <span>Items Per Page: </span>
        <Select
          name='itemsperpage'
          options={itemsPerPageOptions}
          value={itemsPerPage}
          handleChange={setItemsPerPage}
        />
      </div>
    </div>
  );
};

ListFilter.propTypes = {
  admin: PropTypes.shape({
    items: PropTypes.object.isRequired,
    displayType: PropTypes.string.isRequired,
    displayArchived: PropTypes.bool.isRequired,
    page: PropTypes.string.isRequired
  }).isRequired,
  itemsPerPageOptions: PropTypes.array.isRequired,
  pageSelectOptions: PropTypes.array.isRequired,
  setDisplayType: PropTypes.func.isRequired,
  setDisplayArchived: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  setItemsPerPage: PropTypes.func.isRequired
};

export default ListFilter;
