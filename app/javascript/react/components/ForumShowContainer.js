import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom";

import ForumShowTile from "./ForumShowTile"
import ForumContainer from "./ForumContainer"

const ForumShowContainer = (props) => {
  const [forum, setForum] = useState({})
  const [errors, setErrors] = useState("")

  let forumId = props.match.params.id
  useEffect(() => {
    fetch(`/api/v1/forums/${forumId}`, {
      credentials: "same-origin"
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(body => {
        setForum(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <div>
      <ForumShowTile forum={forum} />
    </div>
  )

  // const addNewContribution = ()


}

export default ForumShowContainer