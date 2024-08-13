import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import './Artsandscience.css'; 

const ArtsAndScience = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/artsandscience/courses/allarts');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="arts-and-science-container">
      <div className="arts-and-science-card-container">
        {courses.map(course => (
          <div key={course.id} className="arts-and-science-card">
            <img 
              src={`data:image/jpeg;base64,${course.image}`} 
              alt={course.title} 
              className="arts-and-science-image" 
            />
            <h3 className="arts-and-science-title">{course.title}</h3>
            <p className="arts-and-science-description">{course.description}</p>
            <div className="arts-and-science-button-container">
              <Link to={`/artsandscience/${course.id}`} className="arts-and-science-button-link">
                <button className="arts-and-science-button">
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

export default ArtsAndScience;
