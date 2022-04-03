import { UPDATE_SPECS } from '../globals/ActionTypes';

const InitialState = {
  price: 25,
  hatch: true,
  sedan: true,
  suv: true,
  petrol: true,
  diesel: true,
  manual: true,
  auto: true,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_SPECS:
      return action.payload;
    default:
      return state;
  }
};
