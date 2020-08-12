import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForumContainer from "./ForumContainer"
import ForumShowContainer from "./ForumShowContainer"
import ForumFormContainer from "./ForumFormContainer"


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ForumContainer} />
        <Route exact path="/forums" component={ForumContainer} />
        <Route exact path="/forums/new" component={ForumFormContainer} />
        <Route exact path="/forums/:id" component={ForumShowContainer} />

      </Switch>
    </BrowserRouter>
  )
}

export default App
