import { connect } from 'react-redux';
import Website from '../components/Website';

const mapStateToProps = state => ({
  type: state.section.secondary
});

export default connect(
  mapStateToProps,
  {}
)(Website);
