import * as actionTypes from './actionTypes'
import { get, getById } from "../../services/api/movies";

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const res = await get()
      dispatch({
        type: actionTypes.FETCH_SUCCESS_GET_ALL_MOVIES,
        payload: res.data
      })
    } catch (e) {
      console.log('error: ', e)
    }
  }
}

export function fetchSpecialMovie(id) {
  return async (dispatch) => {
    try {
      const res = await getById(id)
      dispatch({
        type: actionTypes.FETCH_SUCCESS_GET_SPECIAL_MOVIE,
        payload: res.data
      })
    } catch (e) {
      console.log('error: ', e)
    }
  }
}


export function getFromLS() {
  return dispatch => {
    dispatch({
      type: actionTypes.SUCCESS_GET_FROM_LS,
      payload: JSON.parse(localStorage.getItem('movie'))
    })
    dispatch({
      type: actionTypes.SUCCESS_GET_WATCH_LATER,
      payload: JSON.parse(localStorage.getItem('watchLater')) || []
    })
  }
}

export function setToLS(data) {
  return dispatch => {
    const lsData = JSON.parse(localStorage.getItem('movie')) || []

    const isCreated = lsData.find(c => c.id === data.id)

    if (!isCreated) {
      const newLsData = [data, ...lsData.slice(0, 9)]
      localStorage.setItem('movie', JSON.stringify(newLsData))

      dispatch({
        type: actionTypes.SUCCESS_GET_FROM_LS,
        payload: newLsData
      })
    }
  }
}

export function setWatchLaterToLS(data) {
  return dispatch => {
    const filmsWatchLater = JSON.parse(localStorage.getItem('watchLater')) || []

    const isLater = filmsWatchLater?.find(c => c?.id === data?.id)

    if (!isLater) {
      filmsWatchLater.push(data)
      localStorage.setItem('watchLater', JSON.stringify(filmsWatchLater))

      dispatch({
        type: actionTypes.SUCCESS_GET_WATCH_LATER,
        payload: filmsWatchLater
      })
    } else {
      localStorage.setItem('watchLater', JSON.stringify(filmsWatchLater.filter(c => c?.id !== data?.id)))
      dispatch({
        type: actionTypes.SUCCESS_GET_WATCH_LATER,
        payload: filmsWatchLater.filter(c => c?.id !== data?.id)
      })
    }
  }
}


