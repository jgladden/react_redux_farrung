import * as types from '../actions/types';

const message = (state = {}, action) => {
  switch (action.type) {
  case types.POST_MESSAGE: {
    return {
      posting: 1
    };
  }
  case types.POST_MESSAGE_SUCCESS: {
    return { 
      success: action.payload.success 
    };
  }
  case types.POST_MESSAGE_ERROR: {
    return { 
      error: action.payload
    };
  }
  default:
    return state;
  }
};

export default message;
