import * as types from '../actions/types';

const section = (state = {}, action) => {
  switch (action.type) {
  case types.SET_SECTION: {
    let {
      primary,
      secondary,
      tertiary
    } = action.payload;
    if(primary === 'portfolio')
      secondary = secondary || 'online';
    if(primary === 'admin')
      secondary = secondary || 'list';
    return {  primary, secondary, tertiary }
  }
  default:
    return state;
  }
};

export default section;
