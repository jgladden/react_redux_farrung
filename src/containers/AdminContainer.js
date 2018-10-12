import { connect } from 'react-redux';
import Admin from '../components/Admin';

const mapStateToProps = state => ({
  primarySection: state.section.primary
});

export default connect(
  mapStateToProps,
  {}
)(Admin);
