import { actionTypes } from "../action-types";

const ComedyMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_COMEDY_MOVIES:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default ComedyMoviesReducer;
