// src/components/StudentsList.js
import React from 'react';
import './StudentsList.css';

const StudentsList = () => {
  // Sample data (replace with actual data from your backend)
  const students = [
    {
      name: 'John Doe',
      course: 'Web Development',
      profession: 'Software Engineer',
      email: 'john.doe@example.com',
    },
    {
      name: 'Jane Smith',
      course: 'Data Science',
      profession: 'Data Analyst',
      email: 'jane.smith@example.com',
    },
    {
      name: 'Emily Johnson',
      course: 'Graphic Design',
      profession: 'Graphic Designer',
      email: 'emily.johnson@example.com',
    },
    // Add more student objects here
  ];

  return (
    <div className="students-list-container">
      <h1 className="page-title">Students List</h1>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Profession</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.profession}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
