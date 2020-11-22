import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LogInPage from "./pages/loginpage";
import HomePage from "./pages/homepage";

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/login" exact component={LogInPage} />

    </Router>
  );
}

export default App;
