import React from "react";
import "./Dash.css";
import { GoAlertFill } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import { FaCircleXmark } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(ArcElement, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {const [reminders, setReminders] = useState([]);
  const [expiredCount, setExpiredCount] = useState(0);
  const [in7DaysCount, setIn7DaysCount] = useState(0);
  const [in30DaysCount, setIn30DaysCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // Fetch reminders from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setReminders(data);
        calculateCounts(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const calculateCounts = (data) => {
    const currentDate = new Date();
    const expired = data.filter((item) => new Date(item.expiryDate) < currentDate).length;
    const in7Days = data.filter((item) => {
      const expiryDate = new Date(item.expiryDate);
      return expiryDate >= currentDate && expiryDate <= new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    }).length;
    const in30Days = data.filter((item) => {
      const expiryDate = new Date(item.expiryDate);
      return expiryDate > new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000) && expiryDate <= new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    }).length;
    const total = data.length;

    setExpiredCount(expired);
    setIn7DaysCount(in7Days);
    setIn30DaysCount(in30Days);
    setTotalCount(total);
  };

  const barChartData = {
    labels: ['Expired', 'In 7 Days', 'In 30 Days', 'Total'],
    datasets: [
      {
        label: 'Medicine Count',
        data: [expiredCount, in7DaysCount, in30DaysCount, totalCount],
        backgroundColor: ['#ff6384', '#ff9f40', '#ffcd56', '#36a2eb'],
        borderColor: ['#ff6384', '#ff9f40', '#ffcd56', '#36a2eb'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Expired', 'In 7 Days', 'In 30 Days', 'Total'],
    datasets: [
      {
        label: 'Medicine Count',
        data: [expiredCount, in7DaysCount, in30DaysCount, totalCount],
        backgroundColor: ['#ff6384', '#ff9f40', '#ffcd56', '#36a2eb'],
      },
    ],
  }
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">Dashboard » Expiry</div>
      <div className="stats-grid">
        <div className="stats-item expired-items">
          <div className="stats-title">
            <span>Expired Items</span>
          </div>
          <div className="stats-number">{expiredCount}</div>
        </div>
        <div className="stats-item in-7-days">
          <div className="stats-title">
            <span>In 7 Days</span>
          </div>
          <div className="stats-number">{in7DaysCount}</div>
        </div>
        <div className="stats-item in-30-days">
          <div className="stats-title">
            <span>In 30 Days</span>
          </div>
          <div className="stats-number">{in30DaysCount}</div>
        </div>
        <div className="stats-item total-items">
          <div className="stats-title">
            <span>Total Items</span>
          </div>
          <div className="stats-number">{totalCount}</div>
        </div>
      </div>
      <div className="charts-container">
        <Bar data={barChartData} options={{ responsive: true }} />
        <Doughnut data={doughnutChartData} options={{ responsive: true }} />
      </div>
     </div>
  );
};

export default Dashboard;