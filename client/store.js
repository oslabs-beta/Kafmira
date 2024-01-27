import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/indexReducer';
import thunk from 'redux-thunk';

// Adding composeWithDevTools here to get easy access to Redux dev tools
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;