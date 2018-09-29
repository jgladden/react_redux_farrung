import React from 'react';
import Button from './button';
import PropTypes from 'prop-types';

const Todo = ({details, id, handleClick}) => (
  <li> 
    <p>{details}</p>
    <Button
      handleClick={e => handleClick(id)}
      label="Delete"
     />
  </li>
);

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Todo;

