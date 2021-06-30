import { combineReducers } from "redux";
import moviesReducer from "./movies";
import specialMovieReducer from "./movie";
import searchMovieReducer from "./searchMovie";
import setToLSReducer from "./getFromLS";

export default combineReducers({
  movies: moviesReducer,
  movie: specialMovieReducer,
  search: searchMovieReducer,
  setLS: setToLSReducer
})