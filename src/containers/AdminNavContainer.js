import { connect } from 'react-redux';
import { setSection } from '../actions';
import AdminNav from '../components/AdminNav';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  section: state.section
});

export default connect(
  mapStateToProps, 
  {
    setSection
  }
)(AdminNav);
