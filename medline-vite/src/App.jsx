import React from 'react'
import './App.css'
import Scorecard from './pages/Scorecard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import CriteriaPage from './pages/CriteriaPage';
import MainHeader from './components/MainHeader';



function App() {
  return (
    <>
      <BrowserRouter>
      <MainHeader />
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
