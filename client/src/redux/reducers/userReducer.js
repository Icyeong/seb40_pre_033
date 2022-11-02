import { GET_MYINFO } from '../actions/userAction';

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MYINFO:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
