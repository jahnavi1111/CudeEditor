import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

function Display() {
  return (
    <div className="page">
      <img className="display-logo" src={"./logo.png"} alt="Logo" />
      <h1 className="head">CudeEditor</h1>
      <h4 className="desc">
        Code in HTML, CSS, JavaScript and view real-time live output of the
        rendered webpage.
      </h4>
      <h2 className="head2">Render Code. Anytime. Anywhere.</h2>
      <Link to="/app">
        <div class="buttons">
          <div class="container">
            <a class="btn effect04" data-sm-link-text="CLICK" target="/app">
              <span>Start Editing</span>
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Display;
