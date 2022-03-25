import { UPDATE_PREFS } from '../globals/ActionTypes';
import { COL } from '../globals/Constants';
// import carData from '../data/carData';

const InitialState = {
  sortBy: COL.price,
  makes: null,
};

export default (state = InitialState, action) => {
  // console.log(action);

  switch (action.type) {
    case UPDATE_PREFS:
      return action.payload;
    default:
      return state;
  }
};