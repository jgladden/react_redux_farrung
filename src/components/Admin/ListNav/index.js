import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ListNav = ({
  allItems, 
  setCurrentType, 
  currentType,
  setDisplayArchiveItems,
  displayArchiveItems
}) => (
  <div id='adminList__nav'>
    <div id='adminList__typenav'>
      <span>Select Type:</span>
      <ul>
        {Object.keys(allItems).map(type => (
          <li
            key={type}
            className={currentType === type ? 'selected' : ''}
            onClick={() => setCurrentType(type)}
          >{type}</li>
        ))}
      </ul>
    </div>
    <div id='adminList__archiveNav'>
      <span>Display Archived Items:</span>
      <input
        type='checkbox'
        defaultChecked={displayArchiveItems}
        onChange={e => setDisplayArchiveItems(e)}
      />
    </div>
  </div>
);

ListNav.propTypes = {
  allItems: PropTypes.object.isRequired,
  setCurrentType: PropTypes.func.isRequired,
  currentType: PropTypes.string.isRequired,
  setDisplayArchiveItems: PropTypes.func.isRequired,
  displayArchiveItems: PropTypes.bool.isRequired
};

export default ListNav;
