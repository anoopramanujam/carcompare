/*
Testing suspended since moving to new redux
*/

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../../reducers';

const store = (state) => createStore(reducer, state, applyMiddleware(thunk));

export default store;
