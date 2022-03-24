import { combineReducers } from 'redux';
import specFilterReducer from './specFilterReducer';
import featureFilterReducer from './featureFilterReducer';
import prefFilterReducer from './prefFilterReducer.js';

export default combineReducers({
  specFilters: specFilterReducer,
  featureFilters: featureFilterReducer,
  prefFilters: prefFilterReducer,
});
