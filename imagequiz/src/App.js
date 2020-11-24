import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import LogInPage from "./pages/loginpage";
import HomePage from "./pages/homepage";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LogInPage} />Î
      </Switch>
    </BrowserRouter>
  );
}

export default App;
