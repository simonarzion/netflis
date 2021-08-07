import { actionTypes } from "../action-types";

const ActionMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_ACTION_MOVIES:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default ActionMoviesReducer;
