
import React from 'react'

const ForumShowTile = (props) => {
  return (
    <div>
      <div>
        <p className="cell show-page-name">{props.forum.title}</p>
      </div>
      <h3>Let's hear it!: </h3>
      <p>{props.forum.body}</p>
    </div>
  )
}

export default ForumShowTile