import { connect } from 'react-redux';
import { setSection } from 'actions';
import Detail from 'components/Website/Portfolio/Detail/';

const getProps = (items, type, id) => {
  const allItems = items && items[type] ? items[type] : null;
  if(!allItems || !id)
    return {item: {}, prevId: '', nextId: ''};
  const arr = Object.keys(allItems);
  const len = arr.length;
  const pos = arr.indexOf(id);
  const p = pos === 0 ? len - 1 : pos - 1;
  const n = pos === len ? 0 : pos + 1;
  return {
    item: allItems[id],
    prevId: allItems[arr[p]].id,
    nextId: allItems[arr[n]].id
  };
};

const mapStateToProps = state => (
  getProps(state.portfolio.items, state.section.secondary, state.section.tertiary)
);

export default connect(
  mapStateToProps,
  {
    setSection
  }
)(Detail);
