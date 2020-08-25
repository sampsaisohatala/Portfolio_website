import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import { Card, Button } from 'react-bootstrap'
import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="body">
      
      <Router className="">
        <Header/>
        <Projects/>

        
        {/* <div className="">
          <Switch>
            <Route exact path="/">

            </Route>
            <Route path="/about">
              
            </Route>
          </Switch>
        </div>     */}   

        
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
