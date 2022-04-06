import {
  UPDATE_SPECS, UPDATE_FEATURES, UPDATE_PREFS,
  LOAD_CARS, SEARCH_CAR, TOGGLE_WIZARD_MODE,
} from '../globals/ActionTypes';

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

export const setSearchTerm = (searchTerm) => (
  {
    type: SEARCH_CAR,
    payload: searchTerm,
  });

export const setWizardMode = (wizardMode) => (
  { type: TOGGLE_WIZARD_MODE, payload: wizardMode }
);

// Not used now!
export const loadCars = (carsData) => ({
  type: LOAD_CARS,
  payload: carsData,
});
