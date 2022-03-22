import { UPDATE_FEATURES } from '../globals/ActionTypes';
import { PREFERRED } from '../globals/Constants';

const InitialState = {
  alloy: PREFERRED,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_FEATURES:
      return action.payload;
    default:
      return state;
  }
};
