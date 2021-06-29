import React, {useEffect, useMemo, useState} from "react";
import AsyncSelect from 'react-select/async'
import { useHistory } from 'react-router-dom'
import debounce from 'lodash.debounce'

import './Search.scss'



export default function Search({ closeSearchPanel, searchSpecialMovie, searchMovies }) {

  const history = useHistory()
  const { movies } = searchMovies


  const optionsLabel = props => {
    const { poster, title, imdb_rating, genres } = props
    return (
      <div className="dropdown-select" value={title}>
        <img src={poster}  alt="poster" />
        <div className="dropdown-select-description">
          <p className="title">{title}</p>
          <p className="info">
            <span>{imdb_rating}</span>, <span>{genres[0]}</span>
          </p>
        </div>
      </div>
    )
  }

  const options = useMemo(
    () => {
      movies.map(movie => ({value: movie.slug, label: (optionsLabel(movie)) }) )
    },
    [movies],
  )

  const handleChange = (item) => {
    history.push(`/${item.value}`) && closeSearchPanel()
  }

  const loadOptions = debounce((value) => {
    console.log(movies)
    searchSpecialMovie(value)
  }, 400)

  // const loadOptions = debounce(async (inputText, callback) => {
  //   try {
  //     searchSpecialMovie(inputText)
  //
  //     if(callback) callback(movies.map(i => ({ label: (optionsLabel(i))})))
  //
  //     setInputText(inputText)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, 500)



  // useEffect(() => inputText && loadOptions(), [])

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

  // const handlerSelectedFilm = label => {
  //   movies?.map(i => i.title === label.props.value ? history.push(`/${i.slug}`)  : null)
  //   if(closeSearchPanel) closeSearchPanel(false)
  // }

  return (
    <>
      <AsyncSelect
        isClearable
        cacheOptions
        loadOptions={loadOptions}
        options={options}
        placehodler={'SearchIcon film ...'}
        styles={customStyles}
        onChange={handleChange}
        onInputChange={loadOptions}
      />
    </>
  )
}