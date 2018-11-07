import * as types from '../actions/types';

export const getFilteredAdminItems = state => {
  const items = state.admin.items;
  const displayType = state.admin.displayType;
  const displayArchived = state.admin.displayArchived;
  if(!items) return {};
  let filteredItems = items[displayType];
  if(displayArchived) 
    return filteredItems;
  return Object.keys(filteredItems)
    .filter(key =>
      filteredItems[key].display === '1'
    )
    .reduce((obj, key) => {
      obj[key] = filteredItems[key];
      return obj;
    }, {});
}

const initialState = {
    displayType: 'online',
    displayArchived: false
}
const admin = (state = initialState, action) => {
  switch (action.type) {
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
  case types.MERGE_ADMIN_ITEM: {
    let { values } = action.payload;
    let { id, type } = values;
    let portfolio = {...state};
    portfolio.items[type][id] = values;
    return {
      items: {
        ...portfolio.items
      }
    }
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
