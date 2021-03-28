import React from "react";
import HeaderTitle from "./HeaderTitle";

function Home() {
  return (
    <div id="homeDiv">
      <HeaderTitle />
      <div>
        <a href="/mainpage">
          <h2 id="enter">enter</h2>
        </a>
      </div>
    </div>
  );
}

export default Home;
