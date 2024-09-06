import React, { useState, useEffect } from 'react';
import { format, addDays, differenceInDays } from 'date-fns';
import { CSVLink } from 'react-csv';

// Sample data
const initialData = [
  { id: 1, name: 'Product A', expirationDate: '2024-07-01' },
  { id: 2, name: 'Product B', expirationDate: '2024-07-10' },
];

const ExpirationTracker = () => {
  const [data, setData] = useState(initialData);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const today = new Date();
    const newReminders = data.map(item => {
      const expirationDate = new Date(item.expirationDate);
      const daysLeft = differenceInDays(expirationDate, today);
      if (daysLeft <= 7) {
        return { ...item, daysLeft };
      }
      return null;
    }).filter(item => item !== null);
    setReminders(newReminders);
  }, [data]);

  const handleImport = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const importedData = text.split('\n').slice(1).map(line => {
        const [id, name, expirationDate] = line.split(',');
        return { id: parseInt(id), name, expirationDate };
      });
      setData(importedData);
    };
    reader.readAsText(file);
  };

  const handleAddReminder = (id) => {
    const item = data.find(item => item.id === id);
    if (item) {
      const updatedReminders = [...reminders, item];
      setReminders(updatedReminders);
    }
  };

  const generateReport = () => {
    return reminders.map(item => ({
      id: item.id,
      name: item.name,
      expirationDate: item.expirationDate,
      daysLeft: item.daysLeft,
    }));
  };

  const handleExport = () => {
    const headers = [
      { label: 'ID', key: 'id' },
      { label: 'Name', key: 'name' },
      { label: 'Expiration Date', key: 'expirationDate' },
      { label: 'Days Left', key: 'daysLeft' }
    ];
    return { headers, data: generateReport() };
  };

  return (
    <div className="App">
      <h1>Expiration Tracker</h1>
      <input type="file" accept=".csv" onChange={handleImport} />
      <h2>Products</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - Expires on {format(new Date(item.expirationDate), 'yyyy-MM-dd')}
            <button onClick={() => handleAddReminder(item.id)}>Add Reminder</button>
          </li>
        ))}
      </ul>
      <h2>Reminders</h2>
      <ul>
        {reminders.map(item => (
          <li key={item.id}>
            {item.name} - {item.daysLeft} days left
          </li>
        ))}
      </ul>
      <h2>Export Report</h2>
      <CSVLink {...handleExport()} filename="report.csv">Export to CSV</CSVLink>
    </div>
  );
};

export default ExpirationTracker;
  