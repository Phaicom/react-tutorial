import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import Props from "./Props";
import "./index.scss";

const App = (): JSX.Element => {
  return (
    <div className="center">
      <nav className="nav">
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/props">Props and JSX</CustomLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/props">
          <Props />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

const CustomLink = (props: { children: string; to: string }): JSX.Element => {
  const pathname = useLocation().pathname;
  return (
    <Link to={props.to} className={pathname === props.to ? "active" : ""}>
      {props.children}
    </Link>
  );
};

export default App;
