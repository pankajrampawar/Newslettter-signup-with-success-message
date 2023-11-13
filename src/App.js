import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'
import Success from './success'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/success/:email' element={<Success/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
