import React, { Component } from "react";
import img from "./iconfinder_cat_hungry_185523.png";

export class ErrorNotFound extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="404" id="cat404" />
        <h2>404</h2>
        <h4>
          We're sorry the page you were looking for doesn't exist. <br />
          This page is empty...{" "}
          <br/>
          <br/>
          I mean...<br/>
          technically it's NOT empty. There's this cute little cat who's sad he has no more food.
        </h4>
        <a href="/mainpage">
          <h2 id="enter">Come back home!</h2>
        </a>
        <br />
      </div>
    );
  }
}

export default ErrorNotFound;
