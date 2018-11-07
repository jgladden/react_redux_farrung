import { connect } from 'react-redux';
import { setSection } from 'actions';
import Detail from 'components/Website/Portfolio/Detail/';
import { getDetailProps } from 'reducers/portfolio';

const mapStateToProps = state => (
  getDetailProps(state)
);

export default connect(
  mapStateToProps,
  {
    setSection
  }
)(Detail);
