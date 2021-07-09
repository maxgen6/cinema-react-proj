import React, { useMemo } from "react";
import AsyncSelect from 'react-select'
import { useHistory } from 'react-router-dom'
import debounce from 'lodash.debounce'

import {SearchBlock, SearchSelectDescription} from "./styles";


export default function Search({ closeSearchPanel, searchSpecialMovie, searchMovies }) {

  const history = useHistory()
  const movies = searchMovies?.movies


  const optionsLabel = props => {
    const { poster, title, imdb_rating, genres } = props
    return (
      <SearchBlock value={title}>
        <img src={poster}  alt="poster" />
        <SearchSelectDescription>
          <p className="title">{title}</p>
          <p className="info">
            <span>{imdb_rating}</span>, <span>{genres[0]}</span>
          </p>
        </SearchSelectDescription>
      </SearchBlock>
    )
  }

  const options = useMemo(
    () => {
      return movies?.map(movie => ({value: movie.slug, label: (optionsLabel(movie)) }) )
    },
    [movies],
  )

  const handleChange = (item) => {
    history.push(`/${item.value}`)
    return closeSearchPanel(false)
  }

  const loadOptions = debounce((value) => {
    searchSpecialMovie(value)
  }, 400)


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