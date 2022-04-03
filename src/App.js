import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/home/Main';
import { Alert, AlertTitle } from './components/mui';

function App() {
  return (
    <>
      <Alert severity="warning">
        <AlertTitle>Attention!</AlertTitle>
        This is a Pre-release version. Not all cars are included. Some features are incomplete.
      </Alert>
      <Main />
    </>
  );
}

export default App;
