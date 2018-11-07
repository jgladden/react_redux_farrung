import { connect } from 'react-redux';
import { setDisplayType, setDisplayArchived } from 'actions';
import Filter from 'components/Admin/List/Filter';

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect(
  mapStateToProps,
  {
    setDisplayType,
    setDisplayArchived
  }
)(Filter);
