import { connect } from 'react-redux';
import { setRoute } from 'actions';
import Detail from 'components/Website/Portfolio/Detail/';
import { getItemById } from 'reducers';

const mapStateToProps = state => (
  getItemById(state)
);

export default connect(
  mapStateToProps,
  {
    setRoute
  }
)(Detail);
