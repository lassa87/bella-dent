import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Mcontent from './components/MainContent'
import Footer from './components/Footer'
import Decija from './components/comp_content/Decija'
import Estetska from './components/comp_content/Estetska'
import Hirurgija from './components/comp_content/Hirurgija'
import Konzervativna from './components/comp_content/Konzervativna'
import Ortodoncija from './components/comp_content/Ortodoncija'
import Paradontologija from './components/comp_content/Paradontologija'
import Protetika from './components/comp_content/Protetika'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='appBody'>
        <Header />
        <Switch>
          <Route path="/" exact component={Mcontent} />
          <Route path="/Decija" component={Decija} />
          <Route path="/Estetska" component={Estetska} />
          <Route path="/Hirurgija" component={Hirurgija} />
          <Route path="/Konzervativna" component={Konzervativna} />
          <Route path="/Ortodoncija" component={Ortodoncija} />
          <Route path="/Paradontologija" component={Paradontologija} />
          <Route path="/Protetika" component={Protetika} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
