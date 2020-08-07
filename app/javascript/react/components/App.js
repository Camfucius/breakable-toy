import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForumsContainer from "./ForumsContainer"


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ForumsContainer} />
        <Route exact path="/forums" component={ForumsContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
