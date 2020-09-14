import React from 'react'
import PropTypes from 'prop-types'
import './Labels.css'

export const Labels = ({ labels }) => labels.map(({name, color}, index) => 
  <label 
    className="Label" 
    key={index} 
    style={{background: `#${color}`}}
  >
    {name}
  </label>
)

Labels.propTypes = {
  labels: PropTypes.array.isRequired
}