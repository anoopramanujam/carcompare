import { UPDATE_SPECS } from '../globals/ActionTypes';

const InitialState = {
  price: 15,
  petrol: true,
  diesel: true,
  manual: true,
  auto: true,
};

export default (state = InitialState, action) => {
  // console.log(action);

  switch (action.type) {
    case UPDATE_SPECS:
      return action.payload;
    default:
      return state;
  }
};
