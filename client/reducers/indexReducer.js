import { combineReducers } from 'redux';
import mainReducer from './metricsReducer';

// import all reducers here like below
import metricsReducer from './metricsReducer';

// combine reducers
const reducers = combineReducers({
  metrics: metricsReducer,
});

// make the combined reducers available for import
// export default reducers;
export default combineReducers({ mainReducer: mainReducer });