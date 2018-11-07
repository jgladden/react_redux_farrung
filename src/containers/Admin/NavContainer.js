import { connect } from 'react-redux';
import { setRoute } from 'actions';
import Nav from 'components/Admin/Nav';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  urlParts: state.route.urlParts
});

export default connect(
  mapStateToProps, 
  {
    setRoute
  }
)(Nav);
