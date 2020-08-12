import React, { useState, useEffect } from "react";
import Forum from "./Forum";

import { Link } from "react-router-dom"


const ForumContainer = (props) => {
  const [forumsData, setForumsData] = useState([])

  useEffect(() => {
    fetch("/api/v1/forums", {
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
        setForumsData(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const forumsComponents = forumsData.map((forum) => {

    return (
      <Forum
        key={forum.id}
        id={forum.id}
        title={forum.title}
        body={forum.body}
      />
    )
  })

  return (
    <div>
      <Link to={`/forums/new`}>
        Click here to create a post here!
    </Link>
      <div>{forumsComponents}</div>
    </div>
  )
}
export default ForumContainer;