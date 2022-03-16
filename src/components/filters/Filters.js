import React, { useState } from 'react';
import FilterSteps from './FilterSteps';
import FilterDetails from './FilterDetails';
import * as Constants from '../../globals/Constants';

function Filters() {
  const [filterStep, setFilterStep] = useState(Constants.FilterSteps.Specs);

  return (
    <div className="ui container">
      <FilterSteps selected={filterStep} onSelect={setFilterStep} />

      <FilterDetails step={filterStep} />
    </div>
  );
}

export default Filters;
