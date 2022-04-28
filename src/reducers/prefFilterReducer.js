import { UPDATE_PREFS } from '../globals/ActionTypes';
import * as COL from '../globals/ColConstants';
// import carData from '../data/carData';

const InitialState = {
  sortBy: COL.vfm,
  makes: [],
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
