import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { postsReducer } from './postsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  questionReducer,
  postsReducer,
  userReducer,
});
