import React from 'react'
import PropType from 'prop-types'
import { Avatar } from '../Avatar'
import { Labels } from '../Labels'

export const Issue = ({ issue }) => {
  const { user, html_url, title, labels, number } = issue
  return (
    <li className="List__Item">
    <Avatar {...user}/>
    <div>
      <p>
        <a className="List__Link" href={html_url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <Labels labels={labels} />
      </p>
      <p className="List__Info">
        {`#${number} created by `}
        <a className="List__Link" href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
      </p>
    </div>
  </li>
  )
}

Issue.propTypes = {
  issue: PropType.object.isRequired
}