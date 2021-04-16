import React, { Component } from "react";
//import img from "./iconfinder_cat_hungry_185523.png";

export class ErrorNotFound extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <p>
          I'm just as confused as you are. <br />
          This page you were looking for doesn't exist. <br />
        </p>
        But also... <br />
        <h2>
          var chickenOrEgg = [🥚, 🐔] <br />
          chickenOrEgg.sort() <br />
          result: [🐔,🥚]
        </h2>
        You're welcome.
        <br />
        As an apology...
        <br />I will let you hire me.
        <a href="/mainpage">
          <h2 id="enter">Come back home!</h2>
        </a>
        <br />
      </div>
    );
  }
}

export default ErrorNotFound;
