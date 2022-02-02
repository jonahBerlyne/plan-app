import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Layout/NavBar';
import Dashboard from './Components/Dashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}
