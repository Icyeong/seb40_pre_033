import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { userReducer } from './userReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  postReducer,
  postsReducer,
  userReducer,
});
