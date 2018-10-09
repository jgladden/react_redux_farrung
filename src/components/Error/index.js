import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => (
  <p>{error}</p>
);

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;
