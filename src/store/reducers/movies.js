import * as actionTypes from '../actions/actionTypes'

const initialState = {
  movies: null,
  movie: null,
  movieFromLS: null,
  movieWatchLater: null
}

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state
      }
    case actionTypes.FETCH_SUCCESS_GET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case actionTypes.FETCH_START_SPECIAL_MOVIE:
      return {
        ...state
      }
    case actionTypes.FETCH_SUCCESS_GET_SPECIAL_MOVIE:
      return {
        ...state,
        movie: action.payload
      }
    case actionTypes.SUCCESS_GET_FROM_LS:
      return {
        ...state,
        movieFromLS: action.payload
      }
    case actionTypes.SUCCESS_GET_WATCH_LATER:
      return {
        ...state,
        movieWatchLater: action.payload
      }
    default:
      return state
  }
}