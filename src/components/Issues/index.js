import React from 'react'
import PropTypes from 'prop-types'
import './Issues.css'
import { Issue } from '../Issue'

export const Issues = ({ issues }) => (
    <ul className="List">
      {
        issues.map( (issue, key) => (
          <Issue issue={issue} key={key} />
        ))
      }
    </ul>
)

Issues.defaultProps = {
  issues: []
}

Issues.propTypes = {
  issues: PropTypes.array.isRequired
}