import { UPDATE_FEATURES } from '../globals/ActionTypes';
import { PREFERRED, COL } from '../globals/Constants';

const InitialState = {
  [COL.alloyWheels]: PREFERRED,
  [COL.driverSeatAdjust]: PREFERRED,
  [COL.androidPlay]: PREFERRED,
  [COL.powerWindows]: PREFERRED,
};

export default (state = InitialState, action) => {
  console.log(state);
  switch (action.type) {
    case UPDATE_FEATURES:
      return action.payload;
    default:
      return state;
  }
};
