import React, { useState } from "react";
import "./toggle.css";

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <div id="main">
        <h1>Overreacted {isDarkMode ? "dark" : "default"}</h1>
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        <button onClick={toggleMode}>Toggle Mode</button>
      </div>
      <div className="para">
        <div className="section" style={{ textAlign: "left" }}>
          <h3 style={{ color: "pink" }}>The WET Codebase</h3>
          <p>
            <i>Sunday 4th, 2020 &nbsp; &nbsp; 11 min read</i>
          </p>
          <p>Come waste your time with me</p>
        </div>
        <br />
        <div className="section">
          <h3 style={{ color: "pink" }}>Goodby, Clean Code</h3>
          <p>
            <i>Friday 22nd, 2019 &nbsp; &nbsp; 5 min read</i>
          </p>
          <p> Let clean code guide you, Then let it go.</p>
        </div>
        <br />
        <div className="section">
          <h3 style={{ color: "pink" }}>My Decade in Review</h3>
          <p>
            <i>Saturday 11th, 2018 &nbsp; &nbsp; 5min read</i>
          </p>
          <p>A personal reflection</p>
        </div>
        <br />
        <div className="section">
          <h3 style={{ color: "pink" }}>What Are The React Team Principles</h3>
          <p>
            <i>Thursday 4th, 2015 &nbsp; &nbsp; 5 min read</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
