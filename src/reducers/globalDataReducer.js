import { SEARCH_CAR, LOAD_CARS } from '../globals/ActionTypes';
import carData from '../data/carData';

const InitialState = {
  cars: carData,
  searchTerm: '',
};

export default (state = InitialState, action) => {
  // console.log('Global', action);

  switch (action.type) {
    case SEARCH_CAR:
      return { ...state, searchTerm: action.payload };
    case LOAD_CARS:
      return { ...state, cars: action.payload };
    default:
      return state;
  }
};
