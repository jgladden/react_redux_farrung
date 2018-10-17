import { connect } from 'react-redux';
import { submitMessage } from '../actions';
import Message from '../components/Message/';

const mapStateToProps = state => ({
  message: state.message
});

const mapDispatchToProps = dispatch => {
  return {
    submitMessage: messageObj => {
      dispatch(submitMessage(messageObj))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
