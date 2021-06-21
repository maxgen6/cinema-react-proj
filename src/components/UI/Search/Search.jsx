import React, { useEffect, useState } from "react";
import AsyncSelect from 'react-select/async'
import { useHistory } from 'react-router-dom'

import { getMoviesSearch } from "../../../services/api/movies";
import './Search.scss'


export default function Search() {

  const history = useHistory()

  const [inputText, setInputText] = useState(null)
  const [movies, setMovies] = useState(null)
  // const [selectMovie, setSelectMovie] = useState(null)

  const loadOptions = async (inputText, callback) => {
    try {
      const res = await getMoviesSearch(inputText)
      const { movies } = res.data

      if(callback) {
        callback(movies.map(i => ({ label: i.title})))
      }

      setMovies(movies)
      setInputText(inputText)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => inputText && loadOptions(), [])

  const handlerSelectedFilm = label => {
    console.log('cahnge')
    movies?.map(i => i.title === label ? history.push(`/${i.slug}`) : console.log(1))
  }

  return (
    <>
      <AsyncSelect
        isClearable
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onChange={e => handlerSelectedFilm(e?.label)}
      />
    </>
  )
}