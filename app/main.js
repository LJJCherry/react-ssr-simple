import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Topics from "./topics";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/topics">Contact</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </div>
    );
  }
}
