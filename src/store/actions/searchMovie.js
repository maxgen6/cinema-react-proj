import * as actionTypes from './actionTypes'
import { getMoviesSearch } from "../../services/api/movies";


export function searchSpecialMovie(params) {
  return async (dispatch) => {
    try {
      dispatch(startSearchMovies)
      const res = await getMoviesSearch(params)
      dispatch({
        type: actionTypes.SUCCESS_SEARCH_MOVIES,
        payload: res.data
      })
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

// export function successSearchMovies(movies) {
//   return {
//     type: actionTypes.SUCCESS_SEARCH_MOVIES,
//     payload: movies
//   }
// }

export function errorSearchMovies(error) {
  return {
    type: actionTypes.ERROR_SEARCH_MOVIES,
    payload: error
  }
}