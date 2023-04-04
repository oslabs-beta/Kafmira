import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);