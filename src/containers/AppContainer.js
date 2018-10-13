import { connect } from 'react-redux';
import App from '../components/App/';

const mapStateToProps = state => ({
  primarySection: state.section.primary
});

export default connect(
  mapStateToProps,
  {}
)(App);
