import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EngineeringDetails.css';
import img1 from './engineerdesign.jpeg';
import img2 from './mechanical.jpeg';
import img3 from './civil.jpeg';

const courseData = [
  {
    id: 1,
    title: 'Introduction to Engineering Design',
    description: 'Fundamentals of engineering design processes.',
    image: img1,
    duration: '40 hours',
    rating: 4.5,
    overview: 'Comprehensive overview of engineering design processes with practical applications.',
    learningObjectives: [
      'Understand design processes.',
      'Apply problem-solving techniques.',
      'Manage engineering projects.'
    ],
    requirements: [
      'Basic math and science knowledge.',
      'Interest in design methodologies.',
      'Basic computer skills.'
    ],
    chapters: [
      { title: 'Design Principles', video: 'https://example.com/video1.mp4' },
      { title: 'Project Management', video: 'https://example.com/video2.mp4' },
      { title: 'Engineering Applications', video: 'https://example.com/video3.mp4' }
    ]
  },
  {
    id: 2,
    title: 'Mechanical Engineering Principles',
    description: 'Key concepts in dynamics, thermodynamics, and material science.',
    image: img2,
    duration: '45 hours',
    rating: 4.7,
    overview: 'Covers dynamics, thermodynamics, and material science with practical examples.',
    learningObjectives: [
      'Understand dynamics and thermodynamics.',
      'Analyze mechanical systems.',
      'Apply material science concepts.'
    ],
    requirements: [
      'Basic physics and math knowledge.',
      'Interest in mechanical systems.',
      'Strong analytical skills.'
    ],
    chapters: [
      { title: 'Dynamics Basics', video: 'https://example.com/video1.mp4' },
      { title: 'Thermodynamics Concepts', video: 'https://example.com/video2.mp4' },
      { title: 'Material Science Applications', video: 'https://example.com/video3.mp4' }
    ]
  },
  {
    id: 3,
    title: 'Civil Engineering Fundamentals',
    description: 'Principles of structural analysis, geotechnical engineering, and construction management.',
    image: img3,
    duration: '50 hours',
    rating: 4.6,
    overview: 'Broad overview of civil engineering with focus on structural analysis and construction management.',
    learningObjectives: [
      'Understand structural analysis.',
      'Analyze geotechnical concepts.',
      'Apply construction management techniques.'
    ],
    requirements: [
      'Basic math and physics knowledge.',
      'Interest in construction and design.',
      'Access to engineering tools.'
    ],
    chapters: [
      { title: 'Structural Analysis', video: 'https://example.com/video1.mp4' },
      { title: 'Geotechnical Engineering', video: 'https://example.com/video2.mp4' },
      { title: 'Construction Management', video: 'https://example.com/video3.mp4' }
    ]
  }
];

const EngineeringDetails = () => {
  const { id } = useParams();
  const course = courseData.find(c => c.id === parseInt(id));
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(0); 
  useEffect(() => {
    if (enrolled) {
      setShowFeedback(true);
      setProgress(50); 
    }
  }, [enrolled]);

  if (!course) {
    return <p>Course not found.</p>;
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setShowPaymentForm(false);
    setEnrolled(true);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <div className="engineering-details-container">
      <div className="engineering-details-header">
        <img src={course.image} alt={course.title} className="engineering-details-header__image" />
        <div className="engineering-details-header__info">
          <h1 className="engineering-details-header__title">{course.title}</h1>
          <p className="engineering-details-header__description">{course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Rating:</strong> {course.rating} / 5</p>
        </div>
      </div>

      {enrolled ? (
        <>
          <button
            className="engineering-details-explore-button"
            onClick={() => document.getElementById('chapters').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Now
          </button>
        </>
      ) : (
        <button
          onClick={() => setShowPaymentForm(true)}
          className="engineering-details-enroll-button"
        >
          Enroll Now
        </button>
      )}

      {showPaymentForm && (
        <div className="engineering-details-overlay">
          <div className="engineering-details-form-container">
            <h2 className="engineering-details-form-title">Payment Form</h2>
            <form onSubmit={handlePaymentSubmit}>
              <div className="engineering-details-form-group">
                <label className="engineering-details-label">Name</label>
                <input type="text" className="engineering-details-input" required />
              </div>
              <div className="engineering-details-form-group">
                <label className="engineering-details-label">Email</label>
                <input type="email" className="engineering-details-input" required />
              </div>
              <div className="engineering-details-form-group">
                <label className="engineering-details-label">Phone Number</label>
                <input type="tel" className="engineering-details-input" required />
              </div>
              <div className="engineering-details-form-group">
                <label className="engineering-details-label">Credit Card Number</label>
                <input type="text" className="engineering-details-input" required />
              </div>
              <div className="engineering-details-form-group">
                <label className="engineering-details-label">Expiration Date</label>
                <input type="text" className="engineering-details-input" placeholder="MM/YY" required />
              </div>
              <div className="engineering-details-form-group">
                <label className="engineering-details-label">CVV</label>
                <input type="text" className="engineering-details-input" required />
              </div>
              <div className="engineering-details-form-actions">
                <button type="submit" className="engineering-details-submit-button">Submit</button>
                <button type="button" onClick={() => setShowPaymentForm(false)} className="engineering-details-cancel-button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="engineering-details-divider"></div>

      <div className="engineering-details-section">
        <h2 className="engineering-details-section__title">Course Overview</h2>
        <p>{course.overview}</p>
      </div>

      <div className="engineering-details-section">
        <h2 className="engineering-details-section__title">Learning Objectives</h2>
        <ul className="engineering-details-list">
          {course.learningObjectives.map((objective, index) => (
            <li key={index} className="engineering-details-list-item">{objective}</li>
          ))}
        </ul>
      </div>

      <div className="engineering-details-section">
        <h2 className="engineering-details-section__title">Requirements</h2>
        <ul className="engineering-details-list">
          {course.requirements.map((requirement, index) => (
            <li key={index} className="engineering-details-list-item">{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="engineering-details-divider"></div>
      
      {enrolled && (
        <div id="chapters" className="engineering-details-section">
          <h2 className="engineering-details-section__title">Course Chapters</h2>
          {course.chapters.map((chapter, index) => (
            <div key={index} className="engineering-details-chapter">
              <h3>{chapter.title}</h3>
              <video width="600" controls>
                <source src={chapter.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}

      {showFeedback && (
        <div className="engineering-details-feedback">
          <h2 className="engineering-details-feedback__title">Feedback</h2>
          {submitted ? (
            <p>Thank you for your feedback!</p>
          ) : (
            <form onSubmit={handleFeedbackSubmit}>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                className="engineering-details-feedback__input"
                rows="4"
                placeholder="Leave your feedback here"
                required
              ></textarea>
              <button type="submit" className="engineering-details-feedback__submit-button">Submit Feedback</button>
            </form>
          )}
        </div>
      )}

      <div className="engineering-details-divider"></div>

      <div className="engineering-details-related-courses">
        <h2 className="engineering-details-related-courses__title">Related Courses</h2>
        {courseData.filter(c => c.id !== course.id).map((relatedCourse) => (
          <div key={relatedCourse.id} className="engineering-details-related-course">
            <img src={relatedCourse.image} alt={relatedCourse.title} className="engineering-details-related-course__image" />
            <div className="engineering-details-related-course__info">
              <h3 className="engineering-details-related-course__title">{relatedCourse.title}</h3>
              <p className="engineering-details-related-course__description">{relatedCourse.description}</p>
              <a href={`/courses/${relatedCourse.id}`} className="engineering-details-related-course__link">View Details</a>
            </div>
          </div>
        ))}
      </div>

      <div className="engineering-details-divider"></div>

      <div className="engineering-details-calendar">
        <h2 className="engineering-details-calendar__title">Upcoming Events</h2>
        <div className="engineering-details-calendar__container">
          <div className="engineering-details-calendar__event">
            <p className="engineering-details-calendar__event-date">August 15, 2024</p>
            <p className="engineering-details-calendar__event-description">Live webinar on advanced engineering topics.</p>
          </div>
          {/* Add more events dynamically here */}
        </div>
      </div>

      <div className="engineering-details-divider"></div>
    </div>
  );
};

export default EngineeringDetails;
