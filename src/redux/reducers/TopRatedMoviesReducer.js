import { actionTypes } from "../action-types";

const TopRatedMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_RATED_MOVIES:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default TopRatedMoviesReducer;
