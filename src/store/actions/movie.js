import {getById} from "../../services/api/movies";
import * as actionTypes from "./actionTypes";

export function fetchSpecialMovie(id) {
  return async (dispatch) => {
    try {
      dispatch(fetchStartSpecialMovies)
      const res = await getById(id)
      dispatch(fetchSuccessSpecialMovies(res.data))
    } catch (e) {
      dispatch(fetchErrorSpecialMovies(e))
    }
  }
}

export function fetchStartSpecialMovies(movie) {
  return {
    type: actionTypes.FETCH_START_SPECIAL_MOVIE,
    payload: movie
  }
}

export function fetchSuccessSpecialMovies(movie) {
  return {
    type: actionTypes.FETCH_SUCCESS_GET_SPECIAL_MOVIE,
    payload: movie
  }
}

export function fetchErrorSpecialMovies(error) {
  return {
    type: actionTypes.FETCH_ERROR_GET_SPECIAL_MOVIE,
    payload: error
  }
}