import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/Layout/NavBar';

export default function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
    </div>
    </Router>
  );
}
