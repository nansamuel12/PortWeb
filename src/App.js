import React from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Testimonio from "./Testimonio";
import Contact from "./Contact";
import Navigation from "./Navigation";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="About" element={<Navigation />} /> 
        <Route path="/" element={<Navigation />} /> 
      </Routes>
    </Router>
    <About />
    <Home />
    <Experience />
    <Portfolio />
    <Testimonio />
    <Contact />
    
      
    </div>
  );
}

export default App;
