import React, { useState } from 'react';
import Header from '../components/Header';
import Header5 from '../components/Header5';
import Header3 from '../components/Header3';
import medline from '../images/medline.jpg';
import Header1 from '../components/Header1';
import Header4 from '../components/Header4';
import Header6 from '../components/Header6';
import Header7 from '../components/Header7';
import { useNavigate } from 'react-router-dom';


function CriteriaPage() {

  const navigate = useNavigate();

  const [compileButtonText, setCompileButtonText] = useState('COMPILE');
  const [cancelButtonText, setCancelButtonText] = useState('CANCEL');

  const [main, setMain] = useState('');
  const [range, setRange] = useState('');
  const [requirement, setRequirement] = useState('');
  const [level1, setLevel1] = useState('')
  const [level2, setLevel2] = useState('')
  const [level3, setLevel3] = useState('')
  const [criteria_id, setCriteria_id] = useState('')
  const [FLname, setFLname] = useState('')
  const [date, setDate] = useState('')
  const [justifications, setJustifications] = useState('')
  

  const handleCancel = (e) => {
    e.preventDefault();

    setMain('');
    setRange('');
    setRequirement('');
    setLevel1('')
    setLevel2('')
    setLevel3('')
    setCriteria_id('')
    setFLname('')
    setDate('')
    setJustifications('')

    setCompileButtonText('COMPILE');
    setCancelButtonText('CANCELLED');
  };

  const handleSubmit = (e) => {

    
    e.preventDefault();
    console.log('main:', main);
    console.log('range:', range);
    console.log('requirment:', requirement);
    console.log('level1:', level1);
    console.log('level2:', level2);
    console.log('level3:', level3);
    console.log('FLname:', FLname);
    console.log('date:', date);
    console.log('justifications:', justifications);
    console.log('criteria_id', criteria_id);
    
    setCompileButtonText('SCORECARD COMPILED');
    // {} to server
    const data = {
      main_criteria: main,
      scoring_range: range,
      requirements: requirement,
      level1: level1,
      level2: level2,
      level3: level3,
      criteria_id: criteria_id,
      FLname: FLname,
      date: date,
      justifications: justifications,

      
    };

   

    // sendin post req to server
    fetch('http://localhost:4000/criteria', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Data posted:', responseData);
        
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        
      });
  };

  const handleNavigate = () => {
    navigate('/scorecard')
  }

  return (
    <>
      <div id="container">
        <Header />
        <div className='logo-container'>
          <img id="medline-logo" src={medline} alt="Medline Logo" />
        </div>
        <div id='parent'>
          <Header1 />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Enter Main Criteria'
              value={main}
              onChange={(e) => setMain(e.target.value)}
            />
            <Header3 />
            <input
            className='score-input'
              type='number' // Assuming scoring range should be a number
              placeholder='Choose Scoring Range'
              value={range}
              onChange={(e) => setRange(e.target.value)}
              min="1"
              max="3"
              />
            <Header4 />
            
            <input
              type='text'
              placeholder='Enter Requirement'
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
            />
            <Header6 />
            <input
              type='text'
              placeholder='Enter first scoring requirement'
              value={level1}
              onChange={(e) => setLevel1(e.target.value)}
            />
            <input
              type='text'
              placeholder='Enter second scoring requirement'
              value={level2}
              onChange={(e) => setLevel2(e.target.value)}
            />
            <input
              type='text'
              placeholder='Enter third scoring requirement'
              value={level3}
              onChange={(e) => setLevel3(e.target.value)}
            />
          <Header7 />
            <input
              type='text'
              placeholder='Enter any justifications for score range'
              value={justifications}
              onChange={(e) => setJustifications(e.target.value)}
            />
            <Header5 />
            <input
              type='text'
              placeholder='Enter name'
              value={FLname}
              onChange={(e) => setFLname(e.target.value)}
            />
            <input
              type='text'
              placeholder='Enter date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            
            
            <div>
              <button onClick={handleSubmit} className='compile-btn' type="submit">{compileButtonText}<i class="fa-regular fa-floppy-disk"></i></button>
              <button  onClick={handleCancel} className='cancel-btn'>{cancelButtonText} <i class="fa-solid fa-xmark"></i></button>
              <button className='compile-btn' onClick={handleNavigate}>Go to scorecard <i class="fa-brands fa-golang"></i></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CriteriaPage;




