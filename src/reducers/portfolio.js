import * as types from '../actions/types';

const portfolio = (state = {}, action) => {
  switch (action.type) {
  case types.GET_PORTFOLIO_ITEMS: {
    return {
      fetching: 1
    };
  }
  case types.GET_PORTFOLIO_ITEMS_SUCCESS: {
    return {
      items_loaded: 1,
      items: {
        ...action.payload 
      }
    };
  }
  case types.GET_PORTFOLIO_ITEMS_ERROR: {
    return { 
      error: action.payload
    };
  }
  case types.EDIT_PORTFOLIO_ITEM: {
    return {
      ...state,
      edit: {
        id: action.payload.id,
        status: 'posting'
      } 
    }
  }
  case types.EDIT_PORTFOLIO_ITEM_SUCCESS: {
    let { item } = action.payload;
    let portfolio = {...state};
    portfolio.items[item.type][item.id] = item;
    return {
      ...state,
      edit: {
        id: item.id,
        status: 'success'
      }, 
      items: {
        ...portfolio.items
      }
    }
  }
  case types.EDIT_PORTFOLIO_ITEM_ERROR: {
    let { id, error } = action.payload;
    return {
      ...state,
      edit: { id, error }
    }
  }
  case types.MERGE_PORTFOLIO_ITEM: {
    let { item } = action.payload;
    let portfolio = {...state};
    portfolio.items[item.type][item.id] = item;
    return {
      item_merged: item.id,
      items: {
        ...portfolio.items
      }
    }
  }
  case types.REMOVE_PORTFOLIO_ITEM: {
    let { id, type } = action.payload.item;
    let portfolio = {...state};
    delete portfolio.items[type][id];
    return {
      items: {
        ...portfolio.items
      }
    };
  }
  default:
    return state;
  }
};

export default portfolio;
