import { combineReducers } from 'redux';
import mainReducer from './metricsReducer';

export default combineReducers({ mainReducer: mainReducer });