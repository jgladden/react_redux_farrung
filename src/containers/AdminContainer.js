import { connect } from 'react-redux';
import Admin from '../components/Admin';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  section: state.section
});

export default connect(
  mapStateToProps, 
  {}
)(Admin);
