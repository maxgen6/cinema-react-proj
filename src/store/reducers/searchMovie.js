import * as actionTypes from '../actions/actionTypes'

const initialState = {
  searchMovies: null
}

export default function searchMovieReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_SEARCH_MOVIES:
      return {
        ...state
      }
    case actionTypes.SUCCESS_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: action.payload
      }
    case actionTypes.ERROR_SEARCH_MOVIES:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}