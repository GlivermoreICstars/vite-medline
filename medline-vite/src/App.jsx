import React from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import medline from './images/medline.jpg'


function App() {
  return (
    <div id="container"> 
      <Header />
      <div className='logo-container'>
        <img id="medline-logo" src={medline}/>
      </div>
      <div id='parent'>
        <Header2 />
        <Input /> 
        <Header2 />
        <Input /> 
        <Header3 />
        <Input /> 
      </div>
    </div>
  );
};
export default App
