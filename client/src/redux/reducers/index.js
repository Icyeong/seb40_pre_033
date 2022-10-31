import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({ questionReducer, userReducer });
