import React, { useEffect, useState, createContext } from 'react'
import './App.css'
import Scorecard from './pages/Scorecard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import CriteriaPage from './pages/CriteriaPage';
import MainHeader from './components/MainHeader';
import ScorecardHistory from './pages/ScorecardHistory';

export const DataBaseContext = createContext();

function App() {
  const [data, setData] = useState([])
// use useEffect if you want to display any scorecard data to the screen.
useEffect(() => {
  fetch('http://localhost:4000/criteria')
    .then(res => res.json())
    .then(data => {
      console.log(data);  // Logging the data before setting it in the state to confirm
      setData(data);      // Set the data in the state
    })
    .catch(err => console.log(err));
}, []);


  return (
    <DataBaseContext.Provider value={ data }>
      <BrowserRouter>
        <MainHeader />
          <Routes>
          <Route index element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path='/ScorecardHistory' element={<ScorecardHistory />}/>
          <Route path="/Criteria" element={<CriteriaPage />}/>
          <Route path="/Scorecard" element={<Scorecard />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
   </DataBaseContext.Provider>
   
  );
};



export default App
