import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Layout/NavBar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Projects/ProjectDetails';

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/project/:id" element={<ProjectDetails/>}/>
        </Routes>
      </div>
    </Router>
  );
}
