import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LogInPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import Quiz from './pages/quiz';

import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/login" exact component={LogInPage} />
        <Route path="/Daffodil" exact component={Quiz} />
        <Route path="/Lily" exact component={Quiz} />
        <Route path="/Rose" exact component={Quiz} />
        <Route path="/Cherry blossom" exact component={Quiz} />
        <Route path="/Daisy" exact component={Quiz} />
        <Route path="/Sunflower" exact component={Quiz} />
        <Route path="/Tulip" exact component={Quiz} />
        <Route path="/Water lily" exact component={Quiz} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
