import React, { useEffect } from 'react'
import './App.css'
import Scorecard from './pages/Scorecard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import CriteriaPage from './pages/CriteriaPage';
import MainHeader from './components/MainHeader';




function App() {
  
//use useEffect if you want to display any scorecard data to the screen.
  // useEffect(() => {
  //   fetch('http://localhost:4000/scorecard')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // }, [])


  return (
    <>
      <BrowserRouter>
      <MainHeader />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Criteria" element={<CriteriaPage />}/>
          <Route path="/Scorecard" element={<Scorecard />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};



export default App
