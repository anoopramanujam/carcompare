import { UPDATE_SPECS, UPDATE_FEATURES, UPDATE_PREFS } from '../globals/ActionTypes';

export const setSpecFilters = (specFilters) => ({
  type: UPDATE_SPECS,
  payload: specFilters,
});

export const setFeatureFilters = (featureFilters) => ({
  type: UPDATE_FEATURES,
  payload: featureFilters,
});

export const setPrefFilters = (prefFilters) => ({
  type: UPDATE_PREFS,
  payload: prefFilters,
});
