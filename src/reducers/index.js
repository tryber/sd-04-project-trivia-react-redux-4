import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import userReducer from './userReducer';
import rankingReducer from './rankingReducer';

const rootReducer = combineReducers({ apiReducer, userReducer, rankingReducer });

export default rootReducer;
