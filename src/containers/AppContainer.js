import { connect } from 'react-redux';
import App from 'components/App/';

const mapStateToProps = state => ({
  section: state.section
});

export default connect(
  mapStateToProps,
  {}
)(App);
