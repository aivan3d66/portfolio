import React from 'react';
import './App.scss';
import {Footer} from "./components/Footer/Footer";
import {HeaderSection} from "./common/Scroll";

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <Footer/>
    </div>
  );
}

export default App;
