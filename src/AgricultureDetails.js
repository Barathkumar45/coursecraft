import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AgricultureDetails.css';

const AgricultureDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [enrolled, setEnrolled] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/agri-details/${id}`);
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch course details');
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  useEffect(() => {
    if (enrolled) {
      const chaptersElement = document.getElementById('chapters');
      if (chaptersElement) {
        chaptersElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [enrolled]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/api/courses/${id}/feedback`, { feedback });
      setSubmitted(true);
      setFeedback('');
    } catch (err) {
      setError('Failed to submit feedback');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="agriculture-details-container">
      <div className="agriculture-details-header">
        <img src={`data:image/jpeg;base64,${course.image}`} alt={course.title} className="agriculture-details-header__image" />
        <div className="agriculture-details-header__info">
          <h1 className="agriculture-details-header__title">{course.title}</h1>
          <p className="agriculture-details-header__description">{course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Rating:</strong> {course.rating} / 5</p>
        </div>
      </div>

      <button
        onClick={() => {
          setEnrolled(!enrolled);
        }}
        className={`agriculture-details-${enrolled ? 'explore' : 'enroll'}-button`}
      >
        {enrolled ? 'Explore Now' : 'Enroll Now'}
      </button>

      <div className="agriculture-details-divider"></div>

      <div className="agriculture-details-section">
        <h2 className="agriculture-details-section__title">Course Overview</h2>
        <p>{course.overview}</p>
      </div>

      <div className="agriculture-details-section">
        <h2 className="agriculture-details-section__title">Learning Objectives</h2>
        <ul className="agriculture-details-list">
          {course.objectives && course.objectives.split(';').map((objective, index) => (
            <li key={index} className="agriculture-details-list-item">{objective}</li>
          ))}
        </ul>
      </div>

      <div className="agriculture-details-section">
        <h2 className="agriculture-details-section__title">Requirements</h2>
        <ul className="agriculture-details-list">
          {course.requirements && course.requirements.split(';').map((requirement, index) => (
            <li key={index} className="agriculture-details-list-item">{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="agriculture-details-divider"></div>

      {enrolled && (
        <div id="chapters" className="agriculture-details-section">
          <h2 className="agriculture-details-section__title">Course Chapters</h2>
          <div className="agriculture-details-chapters">
            <div className="agriculture-details-chapters__video">
            </div>
            <ul className="agriculture-details-chapters__list">
              {/* Static chapters */}
              <li className="agriculture-details-chapters__item">
                <h3>Chapter 1: Introduction to Agriculture</h3>
                <video width="100%" controls>
                  <source src="path/to/chapter1-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </li>
              <li className="agriculture-details-chapters__item">
                <h3>Chapter 2: Soil Management</h3>
                <video width="100%" controls>
                  <source src="path/to/chapter2-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </li>
              <li className="agriculture-details-chapters__item">
                <h3>Chapter 3: Crop Protection</h3>
                <video width="100%" controls>
                  <source src="path/to/chapter3-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="agriculture-details-divider"></div>

      <div className="agriculture-details-related-courses">
        <h2 className="agriculture-details-related-courses__title">Related Courses</h2>
        <ul className="agriculture-details-related-courses__list">
          {/* Static related courses */}
          <li className="agriculture-details-related-courses__item">Introduction to Organic Farming</li>
          <li className="agriculture-details-related-courses__item">Advanced Crop Management</li>
          <li className="agriculture-details-related-courses__item">Sustainable Agriculture Practices</li>
          <li className="agriculture-details-related-courses__item">Agri-Business Fundamentals</li>
        </ul>
      </div>

      <div className="agriculture-details-divider"></div>

      <div className="agriculture-details-calendar">
        <h2 className="agriculture-details-calendar__title">Upcoming Events</h2>
        <div className="agriculture-details-calendar__container">
          <div className="agriculture-details-calendar__event">
            <h3>Farmers' Market Day</h3>
            <p>Date: August 20, 2024</p>
            <p>Location: Downtown Park</p>
          </div>
          <div className="agriculture-details-calendar__event">
            <h3>Sustainable Farming Workshop</h3>
            <p>Date: September 10, 2024</p>
            <p>Location: Community Center</p>
          </div>
          <div className="agriculture-details-calendar__event">
            <h3>Organic Agriculture Conference</h3>
            <p>Date: October 5, 2024</p>
            <p>Location: Greenfield Auditorium</p>
          </div>
        </div>
      </div>

      <div className="agriculture-details-divider"></div>

      {/* Feedback section moved to the end */}
      {/* <div className="agriculture-details-feedback">
        <h2 className="agriculture-details-feedback__title">Feedback</h2>
        {submitted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              className="agriculture-details-feedback__input"
              rows="4"
              placeholder="Leave your feedback here"
              required
            ></textarea>
            <button type="submit" className="agriculture-details-feedback__submit-button">Submit Feedback</button>
          </form>
        )}
      </div> */}
    </div>
  );
};

export default AgricultureDetails;
