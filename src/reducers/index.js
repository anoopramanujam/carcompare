import { combineReducers } from 'redux';
import specFilterReducer from './specFilterReducer';

export default combineReducers({
  specFilters: specFilterReducer,
});
