import React, { useEffect, useState } from "react";
import AsyncSelect from 'react-select/async'
import { useHistory } from 'react-router-dom'
import debounce from 'lodash.debounce'

import { getMoviesSearch } from "../../../services/api/movies";
import './Search.scss'



export default function Search({ closeSearchPanel, searchMovie, movies }) {

  const history = useHistory()

  const [inputText, setInputText] = useState(null)

  const loadOptions = debounce(async (inputText, callback) => {
    try {
      searchMovie(inputText)

      console.log(movies)

      if(callback) callback(movies.map(i => ({ label: (optionsLabel(i))})))

      setInputText(inputText)
    } catch (e) {
      console.error(e)
    }
  }, 500)

  const optionsLabel = props => {
    const { poster, title, imdb_rating, genres } = props
    return (
      <div className="dropdown-select" value={title}>
        <img src={poster}  alt="poster"/>
        <div className="dropdown-select-description">
          <p className="title">{title}</p>
          <p className="info">
            <span>{imdb_rating}</span>, <span>{genres[0]}</span>
          </p>
        </div>
      </div>
    )
  }

  useEffect(() => inputText && loadOptions(), [])

  const customStyles = {
    dropdownIndicator: base => ({
      ...base,
      display: "none"
    }),
    control: base => ({
      ...base,
      border: "none",
      outline: "none"
    })
  }

  const handlerSelectedFilm = label => {
    movies?.map(i => i.title === label.props.value ? history.push(`/${i.slug}`)  : null)
    if(closeSearchPanel) closeSearchPanel(false)
  }

  return (
    <>
      <AsyncSelect
        isClearable
        cacheOptions
        loadOptions={loadOptions}
        options={movies}
        placehodler={'SearchIcon film ...'}
        styles={customStyles}
        onChange={e => handlerSelectedFilm(e?.label)}
      />
    </>
  )
}