/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import '@testing-library/jest-dom';

import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import App from './App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);

function reduxWrapper(children) {
  return <Provider store={store}>{children}</Provider>;
}

// const renderRedux =

describe('app', () => {
  it('basic render', () => {
    render(reduxWrapper(<App />));
    const introText = screen.getByText(/Set your specs/i);
    expect(introText).toBeInTheDocument();
  });

  it('filters', () => {
    render(reduxWrapper(<App />));
    const specText = screen.getByText(/Maximum price/i);
    expect(specText).toBeInTheDocument();

    const nextLink = screen.getByRole('button', { name: 'next' });
    fireEvent.click(nextLink);
    const featureText = screen.getByText(/Feature Filter/);
    expect(featureText).toBeInTheDocument();
    const nextLink2 = screen.getByRole('button', { name: 'next' });
    fireEvent.click(nextLink2);
    const nextLink3 = screen.queryByRole('button', { name: 'next' });
    expect(nextLink3).toBeNull();
  });
});
