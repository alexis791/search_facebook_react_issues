import React from 'react'
import PropTypes from 'prop-types'
import './Search.css'

export const SearchField = ({ handleChange, value, results }) => (
  <div className="Wrapper">
    <input className="Wrapper__Input" onChange={handleChange} value={value} placeholder="Type for filtering Facebook's React issues"/>
    <p className="Wrapper__Result"><i>{`${results}`} results</i></p>
  </div>
)

SearchField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}