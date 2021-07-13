import React, { useMemo } from "react";
import AsyncSelect from 'react-select'
import { useHistory } from 'react-router-dom'
import debounce from 'lodash.debounce'

import { SearchBlock, SearchSelectDescription}  from "./styles";


export default function Search({ closeSearchPanel, searchSpecialMovie, searchMovies }) {

  const history = useHistory()
  const movies = searchMovies?.movies


  const optionsLabel = props => {
    const { poster, title, imdb_rating, genres } = props
    return (
      <SearchBlock value={title}>

        <SearchBlock.Image src={poster}  alt="poster" />
        <SearchSelectDescription>
          <SearchSelectDescription.Title>{title}</SearchSelectDescription.Title>

          <SearchSelectDescription.Info>
            <SearchSelectDescription.Span>{imdb_rating}</SearchSelectDescription.Span>,
            <SearchSelectDescription.Span>{genres[0]}</SearchSelectDescription.Span>
          </SearchSelectDescription.Info>

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