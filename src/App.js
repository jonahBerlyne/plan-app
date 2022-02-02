import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Layout/NavBar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Projects/ProjectDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreateProject from './Components/Projects/CreateProject';

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/project/:id" element={<ProjectDetails/>}/>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/create" element={<CreateProject/>} />
        </Routes>
      </div>
    </Router>
  );
}
