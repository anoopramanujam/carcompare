import { combineReducers } from 'redux';
import specFilterReducer from './specFilterReducer';
import featureFilterReducer from './featureFilterReducer';

export default combineReducers({
  specFilters: specFilterReducer,
  featureFilters: featureFilterReducer,
});
