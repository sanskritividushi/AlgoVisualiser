import './App.css';
import React from "react";
import ArraysPage from './pages/arraysPage';
import LandingPage from './pages/LandingPage';
import TreesPage from './pages/treespage';
import BacktrackingPage from './pages/backtracking';
import GraphsPage from './pages/graphspage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/arrays" element={<ArraysPage/>}/>
        <Route path="/trees"element={<TreesPage/>} />
        <Route path="/backtracking" element={<BacktrackingPage />} />
        <Route path="/graphs" element={<GraphsPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;
