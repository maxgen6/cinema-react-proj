import * as actionTypes from '../actions/actionTypes'

const initialState = {
  movies: null,
  movie: null,
  searchMovie: null
}

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state
      }
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        movies: action.movies
      }
    case actionTypes.FETCH_ERROR_MOVIES:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}