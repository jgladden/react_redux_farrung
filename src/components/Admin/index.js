import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'containers/Admin/NavContainer';
import EditContainer from 'containers/Admin/Edit/EditContainer';
import Add from 'components/Admin/Add';

const Admin = ({subpage}) => (
  <article id='admin'>
    <Nav />
    {subpage === 'add' ? (
      <Add />
    ) : (
      <EditContainer />
    )}
  </article>
);

Admin.propTypes = {
  subpage: PropTypes.string.isRequired
};

export default Admin;



