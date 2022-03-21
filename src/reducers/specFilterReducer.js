import { UpdateSpecs } from '../globals/ActionTypes';

const InitialState = {
  price: 15,
  petrol: true,
  diesel: true,
  manual: true,
  auto: true,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case UpdateSpecs:
      return action.payload;
    default:
      return state;
  }
};
