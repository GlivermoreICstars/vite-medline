import React from 'react'
import './App.css'
import Criteria from './pages/CriteriaPage';
import Scorecard from './pages/Scorecard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import CriteriaPage from './pages/CriteriaPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/Criteria" element={<CriteriaPage />}/>
          <Route path="/Scorecard" element={<Scorecard />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App
