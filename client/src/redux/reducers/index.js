import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({ questionReducer, postsReducer });
