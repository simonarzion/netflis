import { actionTypes } from "../action-types";

export const setTopRatedMovies = (movies) => {
  return {
    type: actionTypes.SET_TOP_RATED_MOVIES,
    payload: movies,
  };
};

export const setActionMovies = (movies) => {
  return {
    type: actionTypes.SET_ACTION_MOVIES,
    payload: movies,
  };
};

export const setComedyMovies = (movies) => {
  return {
    type: actionTypes.SET_COMEDY_MOVIES,
    payload: movies,
  };
};

export const setNetflixOriginals = (movies) => {
  return {
    type: actionTypes.SET_NETFLIX_ORIGINALS,
    payload: movies,
  };
};

export const selectMovie = (movie) => {
  return {
    type: actionTypes.SELECT_MOVIE,
    payload: movie,
  };
};
