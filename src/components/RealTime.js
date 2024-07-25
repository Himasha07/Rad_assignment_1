import React, { useState, useEffect } from 'react';

const RealTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    },1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h3>Current Time: {currentTime}</h3>
    </div>
  );
};

export default RealTime;
