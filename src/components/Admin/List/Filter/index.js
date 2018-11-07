import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ListFilter = ({admin, setDisplayType, setDisplayArchived}) => {
  const {
    items,
    displayType,
    displayArchived
  } = admin;

  return (
    <div id='adminList__nav'>
      <div id='adminList__typenav'>
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
      <div id='adminList__archiveNav'>
        <span>Display Archived Items:</span>
        <input
          type='checkbox'
          defaultChecked={displayArchived}
          onChange={e => setDisplayArchived(e.target.checked)}
        />
      </div>
    </div>
  );
};

ListFilter.propTypes = {
  admin: PropTypes.shape({
    items: PropTypes.object.isRequired,
    displayType: PropTypes.string.isRequired,
    displayArchived: PropTypes.bool.isRequired
  }).isRequired,
  setDisplayType: PropTypes.func.isRequired,
  setDisplayArchived: PropTypes.func.isRequired
};

export default ListFilter;
