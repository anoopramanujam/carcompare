import { UpdateSpecs } from '../globals/ActionTypes';

export const setSpecFilters = (specFilters) => ({
  type: UpdateSpecs,
  payload: specFilters,
});

// to elscape eslint error for now
export const setFeatureFilter = (price) => ({
  type: 'FEATURE_FILTER',
  payload: price,
});
