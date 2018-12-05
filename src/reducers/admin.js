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

const itemsByType = createSelector(
  [items, displayType],
  (items, displayType) => {
    return !items ? {} :  items[displayType];
  }
);

const itemsArchiveFiltered = createSelector(
  [itemsByType, displayArchived],
  (itemsByType, displayArchived) => {
    let keys = Object.keys(itemsByType);
    if(displayArchived)
      return keys;
    return keys
      .filter(key =>
        itemsByType[key].display === '1'
      );
  }
);

const itemsSorted = createSelector(
  [itemsByType, itemsArchiveFiltered, sortBy, sortOrder],
  (items, itemsArchiveFiltered, sortBy, sortOrder) => {
    let sortedArr = itemsArchiveFiltered
      .slice()
      .sort((a,b) => {
        let iA = items[a][sortBy];
        let iB = items[b][sortBy];
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
      return sortedArr;
    return sortedArr.reverse();
  }
);

const itemsByPage = createSelector(
  [itemsSorted, page, itemsPerPage],
  (itemsSorted, page, itemsPerPage) => {
    let max = Math.ceil(itemsSorted.length / itemsPerPage);
    page = page > max ? max : page;
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    return itemsSorted.slice(start,end);
  }
);

export const getFilteredAdminItems = createSelector(
  [itemsByType, itemsByPage],
  (items, itemsByPage) => {
    return itemsByPage
      .reduce((arr, key) => {
        arr.push(items[key]);
        return arr;
      }, []);
  }
);

export const getPageSelectOptions = createSelector(
  [itemsSorted, itemsPerPage],
  (itemsSorted, itemsPerPage) => {
    let len = itemsSorted.length;
    if(len === 0) return '';
    let totalPages =  Math.ceil(itemsSorted.length / itemsPerPage); 
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
      itemsPerPage: action.payload
    };
  }
  case types.SET_DISPLAY_ARCHIVED: {
    return {
      ...state,
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
