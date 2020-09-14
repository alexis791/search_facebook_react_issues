import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'

export const Avatar = ({ avatar_url, html_url }) => (
  <a href={html_url} target="_blank" rel="noopener noreferrer">
    <img className="Avatar" alt="avatar" src={avatar_url}/>
  </a>
)

Avatar.defaultProps = {
  avatar_url: 'https://picsum.photos/200/300',
  html_url: '#'
}

Avatar.propTypes = {
  avatar_url: PropTypes.string,
  html_url: PropTypes.string
}