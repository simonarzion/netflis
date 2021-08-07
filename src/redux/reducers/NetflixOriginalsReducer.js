import { actionTypes } from "../action-types";

const NetflixOriginalsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_NETFLIX_ORIGINALS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default NetflixOriginalsReducer;
