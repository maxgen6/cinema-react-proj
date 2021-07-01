import { combineReducers } from "redux";
import moviesReducer from "./movies";
import searchMovieReducer from "./searchMovie";

export default combineReducers({
  movies: moviesReducer,
  search: searchMovieReducer
})