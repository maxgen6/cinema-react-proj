import * as actionTypes from '../actions/actionTypes'

const initialState = {
  movieFromLS: null
}

export default function setToLSReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_GET_FROM_LS:
      return {
        ...state
      }
    case actionTypes.SUCCESS_GET_FROM_LS:
      return {
        ...state,
        movieFromLS: action.payload
      }
    default:
      return state
  }
}