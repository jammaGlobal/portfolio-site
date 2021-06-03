import NavBar from "./components/NavBar"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import React, { useRef, useEffect } from 'react';
import "./app.scss";
import Sketch from "./Sketch"


function App() {

  return (
    <div className="app" id="app">
      <NavBar/>

    <div className="sketch" id="sketch">
        <Sketch/>
    </div>

        
    <div className="sections" id="sections">
      <Intro/>
      <Projects/>
      <Blog/>

      <Contact/>
      

    </div>

    {/* <div className="contactSection" id="contactSection"> 
      
    </div> */}

      
    </div>
  );
}

export default App;
