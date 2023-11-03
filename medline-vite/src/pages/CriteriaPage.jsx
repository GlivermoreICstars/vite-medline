import React, { useState } from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Header3 from '../components/Header3';
import medline from '../images/medline.jpg';
import Header1 from '../components/Header1';
import Header4 from '../components/Header4';

function CriteriaPage() {
  const [main, setMain] = useState('');
  const [second, setSecond] = useState('');
  const [range, setRange] = useState('');
  const [requirement, setRequirement] = useState('');

  const handleCancel = (e) => {
    e.preventDefault();

    setMain('');
    setSecond('');
    setRange('');
    setRequirement('');
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // {} to server
    const data = {
      main_criteria: main,
      secondary_criteria: second,
      scoring_range: range,
      requirements: requirement,
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
            <Header2 />
            <input
              type='text'
              placeholder='Enter Secondary Criteria'
              value={second}
              onChange={(e) => setSecond(e.target.value)}
            />
            <Header3 />
            <input
              type='number' // Assuming scoring range should be a number
              placeholder='Choose Scoring Range'
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
            <Header4 />
            <input
              type='text'
              placeholder='Enter Requirements'
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
            />
            <div>
              <button className='compile-btn' type="submit">COMPILE</button>
              <button  onClick={handleCancel} className='cancel-btn'>CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CriteriaPage;




