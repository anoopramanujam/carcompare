import {
  UPDATE_SPECS, UPDATE_FEATURES, UPDATE_PREFS,
  LOAD_CARS, SEARCH_CAR, TOGGLE_WIZARD_MODE,
} from '../globals/ActionTypes';

import cars from '../api/cars';

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

export const loadCars = () => async (dispatch) => {
  console.log('Waiting for response');
  const response = await cars.get('/carData.json');
  dispatch({ type: LOAD_CARS, payload: response.data });
};
