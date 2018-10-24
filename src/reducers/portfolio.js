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
  case types.ADD_PORTFOLIO_ITEM: {
    return {
      posting: 1,
      items: {
        ...state.items
      }
    };
  }
  case types.ADD_PORTFOLIO_ITEM_SUCCESS: {
    let { item } = action.payload;
    let portfolio = {...state};
    portfolio.items[item.type][item.id] = item;
    return {
      items: {
        ...portfolio.items
      }
    };
  }
  case types.ADD_PORTFOLIO_ITEM_ERROR: {
    return {
      error: action.payload,
      items: {
        ...state.items
      }
    };
  }
  case types.EDIT_PORTFOLIO_ITEM: {
    return {
      posting: 1,
      items: {
        ...state.items
      }
    };
  }
  case types.EDIT_PORTFOLIO_ITEM_SUCCESS: {
    let { id, type } = action.payload.item;
    let portfolio = {...state};
    portfolio.items[type][id] = item;
    return {
      items: {
        ...portfolio.items
      }
    };
  }
  case types.EDIT_PORTFOLIO_ITEM_ERROR: {
    return {
      error: action.payload,
      items: {
        ...state.items
      }
    };
  }
  case types.REMOVE_PORTFOLIO_ITEM: {
    return {
      posting: 1,
      items: {
        ...state.items
      }
    };
  }
  case types.REMOVE_PORTFOLIO_ITEM_SUCCESS: {
    let { id, type } = action.payload.item;
    let portfolio = {...state};
    delete portfolio.items[type][id];
    return {
      items: {
        ...portfolio.items
      }
    };
  }
  case types.REMOVE_PORTFOLIO_ITEM_ERROR: {
    return {
      error: action.payload,
      items: {
        ...state.items
      }
    };
  }
  default:
    return state;
  }
};

export default portfolio;
