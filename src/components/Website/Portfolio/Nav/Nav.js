import './styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { setRoute } from 'actions';
import { getPortfolioTypes } from 'reducers';
import PropTypes from 'prop-types';
import Loading from 'components/common/pages/Loading';

const Nav = ({portfolioTypes, setRoute}) => {
  if(!portfolioTypes.length)
    return (<Loading />);

  return (
    <ul id="portfolioNav">
      {portfolioTypes.map(type => (
        <li 
          key={type}
          onClick={() => setRoute(`/portfolio/${type}`)}
        >
          {type.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

Nav.propTypes = {
  portfolioTypes: PropTypes.array.isRequired,
  setRoute: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  portfolioTypes: getPortfolioTypes(state)
});

export default connect(
  mapStateToProps,
  {
    setRoute
  }
)(Nav);

