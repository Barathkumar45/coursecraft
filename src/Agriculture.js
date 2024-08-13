import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import './Agriculture.css'; 

const Agriculture = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/agriculture/courses/allagri');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="agriculture-container">
      <div className="agriculture-card-container">
        {courses.map(course => (
          <div key={course.id} className="agriculture-card">
            <img 
              src={`data:image/jpeg;base64,${course.image}`} 
              alt={course.title} 
              className="agriculture-image" 
            />
            <h3 className="agriculture-title">{course.title}</h3>
            <p className="agriculture-description">{course.description}</p>
            <div className="agriculture-button-container">
              <Link to={`/agriculture/${course.id}`} className="agriculture-button-link">
                <button className="agriculture-button">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agriculture;
