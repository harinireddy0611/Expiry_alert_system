// src/components/Calendar.js
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const ReminderCalendar = () => {
  const [reminders, setReminders] = useState([]);
  const [markedDates, setMarkedDates] = useState([]);

  useEffect(() => {
    // Fetch reminders from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setReminders(data);
        const dates = data.map((reminder) => new Date(reminder.expiryDate));
        setMarkedDates(dates);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (markedDates.some((d) => d.toDateString() === date.toDateString())) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <h2>Medicine Expiry Calendar</h2>
      <Calendar tileClassName={tileClassName} />
    </div>
  );
};

export default ReminderCalendar;
