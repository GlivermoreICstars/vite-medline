import React from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import medline from './images/medline.jpg'
import Header1 from './components/Header1'
import Header4 from './components/Header4'
import QuantityInput from './components/Increment'




function App() {
  return (
    <div id="container"> 
      <Header />
      <div className='logo-container'>
        <img id="medline-logo" src={medline}/>
      </div>
      <div id='parent'>
        <Header1 />
        <Input /> 
        <Header2 />
        <Input />
        <Header3 />
        <Input /><QuantityInput />
        <Header4 />
        <Input />
        <Input />
        <div>
        <button className='compile-btn'>COMPILE</button>
        <button className='cancel-btn'>CANCEL</button>
        </div>
      </div>
    </div>
  );
};
export default App
