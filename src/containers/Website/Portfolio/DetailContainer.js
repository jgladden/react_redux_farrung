import { connect } from 'react-redux';
import { setRoute } from 'actions';
import Detail from 'components/Website/Portfolio/Detail/';
import { getDetailProps } from 'reducers';

const mapStateToProps = state => (
  getDetailProps(state)
);

export default connect(
  mapStateToProps,
  {
    setRoute
  }
)(Detail);
