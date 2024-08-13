import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import './Medicine.css'; 

const Medicine = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/medicine/courses/allmed');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="medicine-container">
      {courses.map(course => (
        <div key={course.id} className="medicine-card">
          <img 
            src={`data:image/jpeg;base64,${course.image}`} 
            alt={course.title} 
            className="medicine-image" 
          />
          <h3 className="medicine-title">{course.title}</h3>
          <p className="medicine-description">{course.description}</p>
          <div className="medicine-button-container">
            <Link to={`/medicine/${course.id}`} className="medicine-button-link">
              <button className="medicine-button">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Medicine;
