import { Collapse } from '@mui/material';
// import carData from '../../data/carData';

import filterSpecs from './SpecLogic';
import filterFeatures from './FeatureLogic';
import filterPrefs from './PrefLogic';

export function findCars(carData, { specFilters, featureFilters, prefFilters }) {
  const specResults = filterSpecs(carData, specFilters);
  const featureResults = filterFeatures(specResults, featureFilters);
  return filterPrefs(featureResults, prefFilters);
}

export function searchCars(carData, searchTerm) {
  const terms = searchTerm.trim().split(' ');
  const result = carData.filter(
    (car) => car.Id.toLowerCase().indexOf(searchTerm.trim().replaceAll(' ', '-').toLowerCase()) >= 0,
  );
  return result;
}
