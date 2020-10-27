import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";

class Home extends Component {
  public render(): JSX.Element {
    return (
      <div>
        <img src={logo} width="250vw" alt="react logo" />
        <h1>React Tutorial</h1>
      </div>
    );
  }
}

export default Home;
