import { Collapse } from '@mui/material';
import carData from '../../data/carData';

import filterSpecs from './SpecLogic';
import filterFeatures from './FeatureLogic';

const findCars = ({ specFilters, featureFilters }) => {
  const specResults = filterSpecs(carData, specFilters);
  return filterFeatures(specResults, featureFilters);
};

export default findCars;
