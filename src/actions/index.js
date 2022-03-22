import { UPDATE_SPECS, UPDATE_FEATURES } from '../globals/ActionTypes';

export const setSpecFilters = (specFilters) => ({
  type: UPDATE_SPECS,
  payload: specFilters,
});

export const setFeatureFilters = (featureFilters) => ({
  type: UPDATE_FEATURES,
  payload: featureFilters,
});
