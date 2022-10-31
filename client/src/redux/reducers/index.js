import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { questionReducer } from './questionReducer';
import { postsReducer } from './postsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  questionReducer,
  questionsReducer,
  postsReducer,
  userReducer,
});
