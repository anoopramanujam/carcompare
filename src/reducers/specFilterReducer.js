import { UpdateSpecs } from '../globals/ActionTypes';

const InitialState = {
  price: 7,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case UpdateSpecs:
      return action.payload;
    default:
      return state;
  }
};