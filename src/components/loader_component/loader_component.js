import React from "react";
import "./loader_component.scss";
import { Component } from "react";
class LoaderComponent extends Component {
  render() {
    return (
      <div className="loaderComponent">
        <div className="content">
          <h2>DATASMART</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }
}

export default LoaderComponent;
