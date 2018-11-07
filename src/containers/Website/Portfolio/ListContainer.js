import { connect } from 'react-redux';
import { setSection } from 'actions';
import List from 'components/Website/Portfolio/List/';
import { getItemsByType } from 'reducers';

const mapStateToProps = state => ({
  type: state.section.secondary,
  items: getItemsByType(state),
  fetching: state.portfolio.fetching,
  error: state.portfolio.error
});

export default connect(
  mapStateToProps,
  {
    setSection
  }
)(List);
