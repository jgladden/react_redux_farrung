import { connect } from 'react-redux';
import { submitAuthRequest } from '../actions';
import Admin from '../components/Admin/';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    submitAuthRequest: credentials => {
      dispatch(submitAuthRequest(credentials))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
