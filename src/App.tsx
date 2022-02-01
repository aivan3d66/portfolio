import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {Employ} from "./components/Employ/Employ";

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Skills/>
      <Works/>
      <Employ/>
    </div>
  );
}

export default App;
