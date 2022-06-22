import React from 'react';
import { useSelector } from 'react-redux';
import Filters from '../filters/Filters';
import Result from '../results/Result';
import IntroMessage from './IntroMessage';

function Home() {
  const globals = useSelector((state) => state.globalData);
  return (
    <div>
      {globals.wizardMode ? <IntroMessage /> : <Result /> }
      {!globals.searchTerm && <Filters /> }
    </div>
  );
}

export default Home;
