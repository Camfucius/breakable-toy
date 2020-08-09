import React, { useState, useEffect } from "react";
import Forum from "./Forum";


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
        key={forum.key}
        title={forum.title}
      />
    )
  })

  return (
    <div>{forumsComponents}</div>
  )
}
export default ForumContainer;