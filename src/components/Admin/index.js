import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NavContainer from 'containers/Admin/NavContainer';
import ListContainer from 'containers/Admin/List/ListContainer';
import Add from 'components/Admin/Add';

const Admin = ({subpage}) => (
  <article id='admin'>
    <NavContainer />
    {subpage === 'add' ? (
      <Add />
    ) : (
      <ListContainer />
    )}
  </article>
);

Admin.propTypes = {
  subpage: PropTypes.string.isRequired
};

export default Admin;



