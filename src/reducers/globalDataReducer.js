import { SEARCH_CAR, LOAD_CARS, TOGGLE_WIZARD_MODE } from '../globals/ActionTypes';
import carData from '../data/carData';

const InitialState = {
  cars: carData,
  searchTerm: '',
  wizardMode: true,
};

export default (state = InitialState, action) => {
  // console.log('Global', action);

  switch (action.type) {
    case SEARCH_CAR:
      return { ...state, searchTerm: action.payload };
    case TOGGLE_WIZARD_MODE:
      return { ...state, wizardMode: action.payload };
    case LOAD_CARS: // Not used now
      return { ...state, cars: action.payload };
    default:
      return state;
  }
};
