import { connect } from 'react-redux';
import Website from '../components/Website';

const mapStateToProps = state => ({
  primarySection: state.section.primary
});

export default connect(
  mapStateToProps,
  {}
)(Website);
