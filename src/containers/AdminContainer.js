import { connect } from 'react-redux';
import Admin from '../components/Admin';

const mapStateToProps = state => ({
  section: state.section
});

export default connect(
  mapStateToProps,
  {}
)(Admin);
