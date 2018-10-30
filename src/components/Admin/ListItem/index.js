import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import PortfolioFormContainer from 'containers/Admin/PortfolioFormContainer';
import Button from 'components/Button';

const ListItem = props => {
  const {
    toggleEditDisplay,
    displayEdit,
    title
  } = props;
  return (
    <li id='adminList__item'>
      <p>TITLE: {title}</p>
      <Button
        className='adminList__editBtn'
        handleClick={() => toggleEditDisplay()}
        label={displayEdit ? 'Close' : 'Edit'}
      />
      <div 
        id='adminList__editForm'
        className={displayEdit ? 'display' : ''}
        >
        <PortfolioFormContainer
          formInitValues={{...props}}
        />
      </div>
    </li>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  toggleEditDisplay: PropTypes.func.isRequired,
  displayEdit: PropTypes.bool.isRequired
};

export default ListItem;
