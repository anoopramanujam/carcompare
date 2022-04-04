import { combineReducers } from 'redux';
import specFilterReducer from './specFilterReducer';
import featureFilterReducer from './featureFilterReducer';
import prefFilterReducer from './prefFilterReducer';
import globalDataReducer from './globalDataReducer';

export default combineReducers({
  specFilters: specFilterReducer,
  featureFilters: featureFilterReducer,
  prefFilters: prefFilterReducer,
  globalData: globalDataReducer,
});
