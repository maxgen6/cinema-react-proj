import { combineReducers } from "redux";
import moviesReducer from "./movies";
import specialMovieReducer from "./movie";
import searchMovieReducer from "./searchMovie";

export default combineReducers({
  movies: moviesReducer,
  movie: specialMovieReducer,
  search: searchMovieReducer
})