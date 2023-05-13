import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Homicide from './components/pages/Homicide';
import School from './components/pages/School';
// import Provision from './components/pages/Provision';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/homicide' exact Component={Homicide}/>
          <Route path='/school' exact Component={School}/>
          {/* <Route path='/provision' exact Component={Provision}/> */}
        </Routes>
    </Router>
    </>
      

  );
}

export default App;
