import * as types from '../actions/types';

export const initialState = {
  primary: 'portfolio',
  secondary: 'online',
  tertiary: null
}
const section = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_SECTION: {
    let {
      primary,
      secondary,
      tertiary
    } = action.payload;
    if(primary === 'online')
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
