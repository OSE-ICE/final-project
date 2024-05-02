import React from "react";
import "../globals.css";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <img src="../assets/logo.png" alt="Logo" className="logo" />
      <div className="container-wrapper">
        <div className="container">Content of container 1</div>
        <div className="container">Content of container 2</div>
        <div className="container">Content of container 3</div>
        <div className="container">Content of container 4</div>
      </div>
    </div>
  );
}
