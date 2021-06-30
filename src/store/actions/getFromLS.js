import * as actionTypes from "./actionTypes";

export function getFromLS() {
  return dispatch => {
    // JSON.parse(localStorage.getItem('movie'))
    dispatch(successGetFromLS(JSON.parse(localStorage.getItem('movie'))))
  }
}

export function setToLS(data) {
  return dispatch => {
    const lsData = JSON.parse(localStorage.getItem('movie')) || []
    lsData.findIndex(c => c.id === data.id) < 0 && lsData.length < 10
      ? lsData.push(data)
      : lsData.splice(0, 1, data)
    localStorage.setItem('movie', JSON.stringify(lsData))
  }
}

export function startGetFromLS(movie) {
  return {
    type: actionTypes.START_GET_FROM_LS,
    payload: movie
  }
}

export function successGetFromLS(movie) {
  return {
    type: actionTypes.SUCCESS_GET_FROM_LS,
    payload: movie
  }
}

