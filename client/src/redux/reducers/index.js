import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { userReducer } from './userReducer';
import { questionsReducer } from './questionsReducer';

export const rootReducer = combineReducers({
  questionReducer,
  questionsReducer,
  userReducer,
});
