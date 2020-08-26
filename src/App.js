import React from 'react'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import { Card, Button } from 'react-bootstrap'
import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


function App() {
  return (
    <div className="body">  
      <Header/>
      <About/>
      <Projects/>  
      <Contact/>     
      <Footer/>  
    </div>
    
  );
}

export default App;
