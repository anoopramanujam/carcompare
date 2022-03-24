import { Collapse } from '@mui/material';
import carData from '../../data/carData';

import filterSpecs from './SpecLogic';
import filterFeatures from './FeatureLogic';
import filterPrefs from './PrefLogic';

const findCars = ({ specFilters, featureFilters, prefFilters }) => {
  const specResults = filterSpecs(carData, specFilters);
  const featureResults = filterFeatures(specResults, featureFilters);
  return filterPrefs(featureResults, prefFilters);
};

export default findCars;
