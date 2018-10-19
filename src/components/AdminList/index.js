import React from 'react';
import Loading from '../Loading';
import AdminListItem from '../AdminListItem';

const AdminList = ({setSection, portfolio}) => {
  const {
    fetching,
    error,
    items
  } = portfolio;

  let displayItems = '';
  if(items) {
    const type = 'online';
    const itemsByType = items[type];
    displayItems = Object.keys(itemsByType).map(id => (
      <AdminListItem 
        key={id} 
        setSection={setSection}
        {...itemsByType[id]}
      />
    ));
  }

  return (
    <div id='adminList'>
      {fetching === 1 ? (
        <Loading />
      ) : (
        <React.Fragment>
        <p>AdminList</p>
        <ul>
        {displayItems}
        </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default AdminList; 
