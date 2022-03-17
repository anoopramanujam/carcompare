import React from 'react';
import Filters from '../filters/Filters';
import Result from '../results/Result';

function Home() {
  return (
    <div>
      <hr />
      <Result />
      <hr />
      <Filters />
    </div>
  );
}

export default Home;
