// src/components/Reminders.js
import React, { useEffect, useState } from 'react';
import './reminders.css';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    // Fetch reminders from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setReminders(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = reminders.reduce((acc, reminder, index) => {
        acc[index] = calculateTimeLeft(reminder.expiryDate);
        return acc;
      }, {});
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [reminders]);

  const calculateTimeLeft = (expiryDate) => {
    const difference = +new Date(expiryDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  return (
    <div className="reminders-container">
      <h2>Medicine Expiry Reminders</h2>
      <div className="reminders-list">
        {reminders.map((reminder, index) => (
          <div key={index} className="reminder-item">
            <div className="reminder-details">
              <p><strong>Medicine:</strong> {reminder.name}</p>
              <p><strong>Expiry Date:</strong> {new Date(reminder.expiryDate).toLocaleDateString()}</p>
              {timeLeft[index] && (
                <p><strong>Time Left for expiry:</strong> {timeLeft[index].days}d {timeLeft[index].hours}h {timeLeft[index].minutes}m {timeLeft[index].seconds}s</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;
