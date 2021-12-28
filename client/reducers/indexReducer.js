import { combineReducers } from 'redux';

// import all reducers here like below
import mainReducer from './metricsReducer';

// combine reducers
// const reducers = combineReducers({
//   metrics: metricsReducer,
// });

// make the combined reducers available for import
// export default reducers;

// import { combineReducers } from 'redux';
// import mainReducers from './mainReducer.js';

export default combineReducers({ mainReducer: mainReducer });