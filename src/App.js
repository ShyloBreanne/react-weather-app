import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was created by <a href="https://www.linkedin.com/in/breannelyall/" target="_blank" rel="noreferrer">Breanne Lyall</a> and is {""}
        <a href="https://github.com/ShyloBreanne/react-weather-app" target="_blank" rel="noreferrer">
          open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}
