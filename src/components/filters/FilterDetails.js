import React from 'react';
import SpecFilter from './SpecFilter';
import FeatureFilter from './FeatureFilter';
import PrefFilter from './PrefFilter';
import * as Constants from '../../globals/Constants';

function renderStepFilter(step) {
  if (step === Constants.FilterSteps.Specs) {
    return <SpecFilter />;
  } if (step === Constants.FilterSteps.Features) {
    return <FeatureFilter />;
  }
  return <PrefFilter />;
}

function FilterDetails({ step }) {
  return (
    <div>{renderStepFilter(step)}</div>
  );
}

export default FilterDetails;
