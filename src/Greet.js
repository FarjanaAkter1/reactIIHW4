import React from 'react'
import { useState } from 'react';

export const Greet = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    }
  
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };
  
    const handleGreetButtonClick = () => {
      alert(`Hello ${firstName} ${lastName}!`);
    };
  
    return (
      <div>
        <label>
          
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <button className='design' onClick={handleGreetButtonClick}>Greet Me</button>
      </div>
    );
  };


