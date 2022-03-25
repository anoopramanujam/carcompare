import { LOAD_CARS } from '../globals/ActionTypes';
import carData from '../data/carData';

const InitialState = {
  cars: carData,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_CARS:
      return { ...state, cars: action.payload };
    default:
      return state;
  }
};
