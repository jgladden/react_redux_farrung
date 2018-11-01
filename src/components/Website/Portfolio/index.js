import './styles.scss';
import React from 'react';
import NavContainer from 'containers/Website/Portfolio/NavContainer';
import ListContainer from 'containers/Website/Portfolio/ListContainer';
import DetailContainer from 'containers/Website/Portfolio/DetailContainer';

const Portfolio = () => (
  <React.Fragment>
    <NavContainer />
    <DetailContainer />
    <ListContainer />
  </React.Fragment>
);

export default Portfolio;


