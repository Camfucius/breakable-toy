import React from "react"

import { Link } from "react-router-dom"

const Forum = props => {

  return (
    // <Link to={`/forums/new`}>
    //   Create a post here!
    // </Link>

    <Link to={`/forums/${props.id}`}>
      <p className="index-forum text-center">{props.title}</p>
    </Link >
  )
}

export default Forum