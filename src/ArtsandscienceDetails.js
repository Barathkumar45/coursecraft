import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArtsandscienceDetails.css';

const ArtsAndScienceDetails = () => {
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
        const response = await axios.get(`http://localhost:8080/api/arts-science-details/${id}`);
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
    <div className="arts-science-details-container">
      <div className="arts-science-details-header">
        <img src={`data:image/jpeg;base64,${course.image}`} alt={course.title} className="arts-science-details-header__image" />
        <div className="arts-science-details-header__info">
          <h1 className="arts-science-details-header__title">{course.title}</h1>
          <p className="arts-science-details-header__description">{course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Rating:</strong> {course.rating} / 5</p>
        </div>
      </div>

      <button
        onClick={() => {
          setEnrolled(!enrolled);
        }}
        className={`arts-science-details-${enrolled ? 'explore' : 'enroll'}-button`}
      >
        {enrolled ? 'Explore Now' : 'Enroll Now'}
      </button>

      <div className="arts-science-details-divider"></div>

      <div className="arts-science-details-section">
        <h2 className="arts-science-details-section__title">Course Overview</h2>
        <p>{course.overview}</p>
      </div>

      <div className="arts-science-details-section">
        <h2 className="arts-science-details-section__title">Learning Objectives</h2>
        <ul className="arts-science-details-list">
          {course.objectives && course.objectives.split(';').map((objective, index) => (
            <li key={index} className="arts-science-details-list-item">{objective}</li>
          ))}
        </ul>
      </div>

      <div className="arts-science-details-section">
        <h2 className="arts-science-details-section__title">Requirements</h2>
        <ul className="arts-science-details-list">
          {course.requirements && course.requirements.split(';').map((requirement, index) => (
            <li key={index} className="arts-science-details-list-item">{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="arts-science-details-divider"></div>

      {enrolled && (
        <div id="chapters" className="arts-science-details-section">
          <h2 className="arts-science-details-section__title">Course Chapters</h2>
          <div className="arts-science-details-chapters">
            <div className="arts-science-details-chapters__video">
              <ul className="arts-science-details-chapters__list">
                <li className="arts-science-details-chapters__item">
                  <h3>Chapter 1: Introduction to Modern Art</h3>
                  <video width="100%" controls>
                    <source src="path/to/introduction-to-modern-art.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </li>
                <li className="arts-science-details-chapters__item">
                  <h3>Chapter 2: Philosophy and Critical Thinking</h3>
                  <video width="100%" controls>
                    <source src="path/to/philosophy-critical-thinking.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </li>
                <li className="arts-science-details-chapters__item">
                  <h3>Chapter 3: Introduction to Art History</h3>
                  <video width="100%" controls>
                    <source src="path/to/introduction-to-art-history.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="arts-science-details-divider"></div>

      <div className="arts-science-details-related-courses">
        <h2 className="arts-science-details-related-courses__title">Related Courses</h2>
        <ul className="arts-science-details-related-courses__list">
          <li className="arts-science-details-related-courses__item">Advanced Art Techniques</li>
          <li className="arts-science-details-related-courses__item">Introduction to Philosophy</li>
          <li className="arts-science-details-related-courses__item">Introduction to commerce</li>
        </ul>
      </div>

      <div className="arts-science-details-divider"></div>

      <div className="arts-science-details-calendar">
        <h2 className="arts-science-details-calendar__title">Upcoming Events</h2>
        <div className="arts-science-details-calendar__container">
          <div className="arts-science-details-calendar__event">
            <h3>Modern Art Exhibition</h3>
            <p>Date: August 25, 2024</p>
            <p>Location: City Art Gallery</p>
          </div>
          <div className="arts-science-details-calendar__event">
            <h3>Philosophy Seminar</h3>
            <p>Date: September 10, 2024</p>
            <p>Location: University Auditorium</p>
          </div>
          <div className="arts-science-details-calendar__event">
            <h3>Art History Workshop</h3>
            <p>Date: October 15, 2024</p>
            <p>Location: Art Museum</p>
          </div>
        </div>
      </div>

      <div className="arts-science-details-divider"></div>

      {/* <div className="arts-science-details-feedback">
        <h2 className="arts-science-details-feedback__title">Feedback</h2>
        {submitted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              className="arts-science-details-feedback__input"
              rows="4"
              placeholder="Leave your feedback here"
              required
            ></textarea>
            <button type="submit" className="arts-science-details-feedback__submit-button">Submit Feedback</button>
          </form>
        )}
      </div> */}
    </div>
  );
};

export default ArtsAndScienceDetails;
