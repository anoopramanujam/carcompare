/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import App from './App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);

// function Wrapper({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }

describe('basics', () => {
  it('basic render', () => {
    render(<Provider store={store}><App /></Provider>);
    const linkElement = screen.getByText(/Set your specs/i);
    expect(linkElement).toBeInTheDocument();
  });
});
