
import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Dashboard.css';


Chart.register(ArcElement, Legend, Tooltip);

const Dashboard = () => {
  const chartRef = useRef(null);

  
  const data = {
    totalCourses: 120,
    studentsEnrolled: 4500,
    coursesEnrolled: 3400,
    totalRevenue: '$50,000',
  };

  const pieData = {
    labels: ['Engineering', 'Arts', 'Science', 'Medicine', 'Agriculture'],
    datasets: [
      {
        label: 'Courses Enrolled',
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#3498db',
          '#2ecc71',
          '#f1c40f',
          '#e74c3c',
          '#9b59b6',
        ],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  useEffect(() => {
    
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <div className="card-container">
          <div className="card">
            <div className="card-icon">📚</div>
            <div className="card-content">
              <h3>Total Courses</h3>
              <p>{data.totalCourses}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">👩‍🎓</div>
            <div className="card-content">
              <h3>Students Enrolled</h3>
              <p>{data.studentsEnrolled}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">📝</div>
            <div className="card-content">
              <h3>Courses Enrolled</h3>
              <p>{data.coursesEnrolled}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">💰</div>
            <div className="card-content">
              <h3>Total Revenue</h3>
              <p>{data.totalRevenue}</p>
            </div>
          </div>
        </div>
        <div className="additional-info">
          <div className="info-card pie-chart-card">
            <h3 className="info-card-title">Courses Distribution</h3>
            <div className="pie-chart-wrapper">
              <Pie data={pieData} options={pieOptions} ref={chartRef} />
            </div>
          </div>
          <div className="info-card">
            <h3 className="info-card-title">Recent Activity</h3>
            <p className="info-card-content">View recent activities such as new course additions, student registrations, and more.</p>
          </div>
          <div className="info-card">
            <h3 className="info-card-title">Upcoming Courses</h3>
            <p className="info-card-content">Highlight upcoming courses and important dates.</p>
          </div>
          <div className="info-card">
            <h3 className="info-card-title">Admin Notifications</h3>
            <p className="info-card-content">Keep track of important notifications for administrators.</p>
          </div>
          <div className="info-card">
            <h3 className="info-card-title">System Health</h3>
            <p className="info-card-content">Monitor the health and status of the system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
