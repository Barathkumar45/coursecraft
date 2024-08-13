import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Engineering.css';
import axios from 'axios';

const Engineering = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses/all');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="engineering-container">
      {courses.map(course => (
        <div key={course.id} className="engineering-card">
          <img src={`data:image/jpeg;base64,${course.image}`} alt={course.title} className="engineering-image" />
          <h3 className="engineering-title">{course.title}</h3>
          <p className="engineering-description">{course.description}</p>
          <div className="engineering-button-container">
            <Link to={`/engineering/${course.id}`} className="engineering-button-link">
              <button className="engineering-button">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Engineering;
