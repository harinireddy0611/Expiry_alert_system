import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar.jsx'; // Make sure this import is 
import Dashboard from './components/Dash.jsx';
import './index.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Reminders from './components/Reminders.jsx';
import Account from './components/Login.jsx';
//import { Link } from 'react-router-dom';
import Report from './components/Report.jsx'
import Calendar from './components/Calender.jsx';

function App() {
  return (
    <div>
     <Router>
      <div className="app">
        <div className='left'><Sidebar/></div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/account" element={<Account />} />
            {/* Add other routes here */}
            <Route path="/reports" element={<Report />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
   
      </div>
      
    </Router>
    
    </div>

  );
}

// Use ReactDOM.render to render the App component
ReactDOM.render(<App />, document.getElementById('root'));

export default App; // Export App if needed elsewhere
