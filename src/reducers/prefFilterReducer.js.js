import { UPDATE_PREFS } from '../globals/ActionTypes';
import { COL } from '../globals/Constants';

const InitialState = {
  sortBy: COL.price,
  makes: [''],
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
