import * as actionTypes from './actionTypes'
import { getMoviesSearch } from "../../services/api/movies";


export function searchMovie(params) {
  return async (dispatch) => {
    try {
      dispatch(startSearchMovies)
      const res = await getMoviesSearch(params)
      dispatch(successSearchMovie(res.data))
    } catch (e) {
      dispatch(errorSearchMovies(e))
    }
  }
}

export function startSearchMovies(movies) {
  return {
    type: actionTypes.START_SEARCH_MOVIES,
    payload: movies
  }
}

export function successSearchMovie(movies) {
  return {
    type: actionTypes.SUCCESS_SEARCH_MOVIES,
    payload: movies
  }
}

export function errorSearchMovies(error) {
  return {
    type: actionTypes.ERROR_SEARCH_MOVIES,
    payload: error
  }
}