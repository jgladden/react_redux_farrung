import * as types from '../actions/types';
import { createSelector } from 'reselect';
import formUtil from 'utils/formUtil';

const items = state => state.admin.items;
const displayType = state => state.admin.displayType;
const displayArchived = state => state.admin.displayArchived;
const sortBy = state => state.admin.sortBy;
const sortOrder = state => state.admin.sortOrder;
const page = state => state.admin.page;
const itemsPerPage = state => state.admin.itemsPerPage;

const getItemsByType = (items, displayType) => {
  return !items ? {} :  items[displayType];
};

const getArchivedFilteredIds = (itemsByType, displayArchived) => {
  let ids = Object.keys(itemsByType);
  if(!displayArchived)
    ids = ids
      .filter(id =>
        itemsByType[id].display === '1'
      );
  return ids;
};

const getSortedIds = (itemsByType, filteredIds, sortBy, sortOrder) => {
  let sortedIds = filteredIds
    .slice()
    .sort((a,b) => {
      let iA = itemsByType[a][sortBy];
      let iB = itemsByType[b][sortBy];
      if(isNaN(Number(iA))) {
        iA = iA.toUpperCase();
        iB = iB.toUpperCase();
      } else {
        iA = parseInt(iA);
        iB = parseInt(iB);
      }
      return (iA < iB) ? -1 : (iA > iB) ? 1 : 0;
    });
  if(sortOrder !== 'descending')
    return sortedIds;
  return sortedIds.reverse();
};


const getCurrPageIds = (sortedIds, itemsPerPage, page) => {
  let max = Math.ceil(sortedIds.length / itemsPerPage);
  page = page > max ? max : page;
  let start = (page - 1) * itemsPerPage;
  let end = start + itemsPerPage;
  return sortedIds.slice(start,end);
};

const sortedIds = createSelector(
  [items, displayType, displayArchived, sortBy, sortOrder],
  (items, displayType, displayArchived, sortBy, sortOrder) => {
    const itemsByType = getItemsByType(items, displayType);
    const filteredIds = getArchivedFilteredIds(itemsByType, displayArchived);
    return getSortedIds(itemsByType, filteredIds, sortBy, sortOrder);
  }
);

export const getFilteredAdminItems = createSelector(
  [sortedIds, page, itemsPerPage],
  (sortedIds, page, itemsPerPage) => {
    const currPageIds = getCurrPageIds(sortedIds, itemsPerPage, page);
    return currPageIds
      .reduce((arr, key) => {
        arr.push(items[key]);
        return arr;
      }, []);
  }
);

export const getPageSelectOptions = createSelector(
  [sortedIds, itemsPerPage],
  (sortedIds, itemsPerPage) => {
    let len = sortedIds.length;
    if(len === 0) return '';
    let totalPages =  Math.ceil(len / itemsPerPage); 
    return formUtil.getSelectOptions(totalPages);
  }
);


const initialState = {
  displayType: 'online',
  sortBy: 'title',
  sortOrder: 'ascending',
  page: '1',
  itemsPerPage: '10',
  displayArchived: false
};

const admin = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_SORT_BY: {
    const {
      sortBy,
      sortOrder
    } = action.payload;
    return { ...state, sortBy, sortOrder };
  }
  case types.SET_PAGE: {
    return {
      ...state,
      page: action.payload
    };
  }
  case types.SET_ITEMS_PER_PAGE: {
    return {
      ...state,
      page: '1',
      itemsPerPage: action.payload
    };
  }
  case types.SET_DISPLAY_ARCHIVED: {
    return {
      ...state,
      page: '1',
      displayArchived: action.payload
    };
  }
  case types.SET_DISPLAY_TYPE: {
    return {
      ...state,
      displayType: action.payload
    };
  }
  case types.GET_ADMIN_ITEMS: {
    return {
      ...state,
      fetching: true
    };
  }
  case types.GET_ADMIN_ITEMS_SUCCESS: {
    return {
      ...state,
      fetching: false,
      error: null,
      success: true,
      items: {
        ...action.payload 
      }
    };
  }
  case types.GET_ADMIN_ITEMS_ERROR: {
    return {
      ...state, 
      fetching: false,
      success: false,
      error: action.payload
    };
  }
  case types.MERGE_ADMIN_ITEM: {
    let { values } = action.payload;
    let { id, type } = values;
    let portfolio = {...state};
    portfolio.items[type][id] = values;
    return {
      ...state,
      items: {
        ...portfolio.items
      }
    };
  }
  case types.REMOVE_ADMIN_ITEM: {
    let { id, type } = action.payload;
    let portfolio = {...state};
    delete portfolio.items[type][id];
    return {
      ...state,
      items: {
        ...portfolio.items
      }
    };
  }
  default:
    return state;
  }
};

export default admin;

