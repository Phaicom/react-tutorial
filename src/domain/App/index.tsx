import React from "react";
// import logo from "../../assets/images/logo.svg";
// import "./index.scss";

const App = (): JSX.Element => {
  return (
    <div className="ui container commments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src="" alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
