import { actionTypes } from "../action-types";

const SelectedMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SELECT_MOVIE:
      return { ...action.payload };

    default:
      return state;
  }
};

export default SelectedMovieReducer;
