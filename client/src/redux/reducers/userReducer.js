import { REGISTER_USER } from '../actions/userAction';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
};
