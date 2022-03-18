import React from 'react';
import './App.scss';
import {Footer} from "./components/Footer/Footer";
import {HeaderSection} from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <Footer/>
    </div>
  );
}

export default App;
