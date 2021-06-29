import * as actionTypes from './actionTypes'
import {get} from "../../services/api/movies";

export function fetchMovies() {
  return async (dispatch) => {
    try {
      dispatch(fetchStartMovies)
      const res = await get()
      dispatch(fetchSuccessMovies(res.data))
    } catch (e) {
      dispatch(fetchErrorMovies(e))
    }
  }
}

export function fetchStartMovies(movies) {
  return {
    type: actionTypes.FETCH_START,
    payload: movies
  }
}

export function fetchSuccessMovies(movies) {
  return {
    type: actionTypes.FETCH_SUCCESS_GET_ALL_MOVIES,
    payload: movies
  }
}

export function fetchErrorMovies(error) {
  return {
    type: actionTypes.FETCH_ERROR_GET_ALL_MOVIES,
    payload: error
  }
}


