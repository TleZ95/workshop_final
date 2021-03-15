import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import User from "./page/User";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/UserProfile/:id" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
