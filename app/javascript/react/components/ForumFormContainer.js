import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const ForumFormContainer = (props) => {
  const [getNewForum, setNewForum] = useState({
    title: "",
    body: "",
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [error, setError] = useState("");

  const handleFieldChange = (event) => {
    setNewForum({
      ...getNewForum,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const addNewForum = (formInfo) => {
    fetch("/api/v1/forums", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formInfo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else if (response.status === 401) {
          setError("You must sign in before submitting a review!");
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.submitted) {
          setShouldRedirect(true);
        } else setError(body.error);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewForum(getNewForum);
  };

  let errorMessage = <></>;

  if (error !== "") {
    errorMessage = <p className="error-message">{error}</p>;
  }

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errorMessage}
        <label>
          Title of your post:
          <input
            name="title"
            id="title"
            type="text"
            onChange={handleFieldChange}
          />
        </label>
        <label>
          Let's hear it!:
          <input
            name="body"
            id="body"
            type="text"
            onChange={handleFieldChange}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  ); 
};

export default ForumFormContainer;