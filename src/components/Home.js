import React from "react";
import App from "./App";
import Display from "./Display";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Router>
        <Switch>
          <Route path="/" exact component={Display} />
          <Route path="/app" component={App} />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
