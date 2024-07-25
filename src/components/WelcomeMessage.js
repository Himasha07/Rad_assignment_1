import React, { useState } from 'react';

const WelcomeMessage = () => {
  const [name, setName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to TravelBuddy!');

  const handleInputChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    setWelcomeMessage(newName ? `Welcome, ${newName}!` : 'Welcome to TravelBuddy!');
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>{welcomeMessage}</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};

export default WelcomeMessage;
