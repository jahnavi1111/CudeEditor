import React from "react";
import { Link } from "react-router-dom";

function Display() {
  return (
    <div className="page">
      <h1 className="head">CudeEditor</h1>
      <h3 className="desc">An online Code Editing Web Interface.</h3>
      <h3 className="desc">Code in HTML, CSS, JavaScript and view real-time</h3>
      <h3 className="desc"> live output of the rendered webpage.</h3>
      <h2 className="head2">Render Code. Anytime. Anywhere.</h2>
      <Link to="/app">
        <h2 className="display">START EDITING</h2>
      </Link>
    </div>
  );
}

export default Display;
