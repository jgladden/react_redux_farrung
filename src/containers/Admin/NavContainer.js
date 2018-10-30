import { connect } from 'react-redux';
import { setSection } from 'actions';
import Nav from 'components/Admin/Nav';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  section: state.section
});

export default connect(
  mapStateToProps, 
  {
    setSection
  }
)(Nav);
