import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';

export const rootReducer = combineReducers({ questionReducer });
