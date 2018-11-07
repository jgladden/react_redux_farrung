import { connect } from 'react-redux';
import { getFilteredAdminItems } from 'reducers';
import List from 'components/Admin/List';

const mapStateToProps = state => ({
  filteredItems: getFilteredAdminItems(state),
  admin: state.admin
});

export default connect(
  mapStateToProps,
  {}
)(List);
