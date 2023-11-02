import React from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import Header2 from '../components/Header2'
import Header3 from '../components/Header3'
import medline from '../images/medline.jpg'
import Header1 from '../components/Header1'
import Header4 from '../components/Header4'
import QuantityInput from '../components/Increment'
import { useState } from 'react'



function CriteriaPage() {

const [main, setMain] = useState('')
const [second, setSecond] = useState('')
const [range, setRange] = useState(0)
const [requirement, setRequirement] = useState('')


return (
  <>
      <div id="container"> 
        <Header />
        <div className='logo-container'>
          <img id="medline-logo" src={medline}/>
        </div>
        <div id='parent'>
          <Header1 />
          <input  type='text' placeholder='Enter Main Criteria' value={main} onChange={(e) => {
            setMain(e.target.value)
          }}/>
          <Header2 />
          <input  type='text' placeholder='Enter Main Criteria' value={second} onChange={(e) => {
            setSecond(e.target.value)
          }}/>
          <Header3 />
          <input  type='text' placeholder='Enter Main Criteria' value={range} onChange={(e) => {
            setRange(e.target.value)
          }}/>
          <Header4 />
          <input  type='text' placeholder='Enter Main Criteria' value={requirement} onChange={(e) => {
            setRequirement(e.target.value)
          }}/>
          <Input />
          <div>
          <button  className='compile-btn'>COMPILE</button>
          <button className='cancel-btn'>CANCEL</button>
          </div>
        </div>
      </div>
    </>
  )
};


export default CriteriaPage