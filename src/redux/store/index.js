import { combineReducers } from "redux";
import ActionMoviesReducer from "../reducers/ActionMoviesReducer";
import ComedyMoviesReducer from "../reducers/ComedyMoviesReducer";
import NetflixOriginalsReducer from "../reducers/NetflixOriginalsReducer";
import TopRatedMoviesReducer from "../reducers/TopRatedMoviesReducer";

export const AllReducers = combineReducers({
  topRatedMovies: TopRatedMoviesReducer,
  actionMovies: ActionMoviesReducer,
  comedyMovies: ComedyMoviesReducer,
  netflixOriginals: NetflixOriginalsReducer,
});
