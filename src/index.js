/* eslint-disable jest/require-hook */
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import specFilterReducer from './reducers/specSlice';
import featureFilterReducer from './reducers/featureSlice';
import prefFilterReducer from './reducers/prefSlice';
import globalDataReducer, { loadCars } from './reducers/globalSlice';

const store = configureStore({
  reducer: {
    specFilters: specFilterReducer,
    featureFilters: featureFilterReducer,
    prefFilters: prefFilterReducer,
    globalData: globalDataReducer,
  },
});

store.dispatch(loadCars());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
