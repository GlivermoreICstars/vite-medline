import React, { useState } from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Header3 from '../components/Header3';
import medline from '../images/medline.jpg';
import Header1 from '../components/Header1';
import Header4 from '../components/Header4';
import { useNavigate } from 'react-router-dom';


function CriteriaPage() {

  

  const [main, setMain] = useState('');
  const [second, setSecond] = useState('');
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
    setSecond('');
    setRange('');
    setRequirement('');
    setLevel1('')
    setLevel2('')
    setLevel3('')
    setCriteria_id('')
    setFLname('')
    setDate('')
    setJustifications('')
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('main:', main);
    console.log('second:', second);
    console.log('range:', range);
    console.log('requirment:', requirement);
    console.log('level1:', level1);
    console.log('level2:', level2);
    console.log('level3:', level3);
    console.log('criteria_id', criteria_id);
    console.log('FLname:', FLname);
    console.log('date:', date);
    console.log('justifications:', justifications)

    // {} to server
    const data = {
      main_criteria: main,
      secondary_criteria: second,
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
const navigate = useNavigate();
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
            <input
              type='text'
              placeholder='level one'
              value={level1}
              onChange={(e) => setLevel1(e.target.value)}
            />
            <input
              type='text'
              placeholder='level 2'
              value={level2}
              onChange={(e) => setLevel2(e.target.value)}
            />
            <input
              type='text'
              placeholder='level 3'
              value={level3}
              onChange={(e) => setLevel3(e.target.value)}
            />
            <input
              type='number'
              placeholder='criteria_id'
              value={criteria_id}
              onChange={(e) => setCriteria_id(e.target.value)}
            />
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
            <input
              type='text'
              placeholder='justifications'
              value={justifications}
              onChange={(e) => setJustifications(e.target.value)}
            />
            <div>
              <button onClick={handleSubmit} className='compile-btn' type="submit">COMPILE</button>
              <button  onClick={handleCancel} className='cancel-btn'>CANCEL</button>
              <button className='compile-btn' onClick={handleNavigate}>Go to scorecard</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CriteriaPage;




