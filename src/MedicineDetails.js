import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MedicineDetails.css';
import img1 from './humananatomy.jpeg'; 
import img2 from './pharmacology.jpeg'; 
import img3 from './clinical.jpeg'; 

const courseData = [
  {
    id: 1,
    title: 'Introduction to Human Anatomy',
    description: 'Study the structure and function of the human body, including organs, tissues, and systems.',
    image: img1,
    duration: '30 hours',
    rating: 4.6,
    overview: 'Explore the fundamental concepts of human anatomy with detailed insights into bodily systems and functions.',
    learningObjectives: [
      'Understand human anatomy and physiology.',
      'Identify major organs and systems.',
      'Apply anatomical knowledge in practical contexts.'
    ],
    requirements: [
      'Basic biology knowledge.',
      'Interest in human body systems.',
      'Access to anatomy resources.'
    ],
    chapters: [
      { title: 'Introduction to Anatomy', video: 'https://example.com/video1.mp4' },
      { title: 'Organ Systems', video: 'https://example.com/video2.mp4' },
      { title: 'Functional Anatomy', video: 'https://example.com/video3.mp4' }
    ]
  },
  {
    id: 2,
    title: 'Fundamentals of Pharmacology',
    description: 'Learn the basic principles of pharmacology, including drug actions, interactions, and therapeutic uses.',
    image: img2,
    duration: '35 hours',
    rating: 4.8,
    overview: 'Gain a comprehensive understanding of pharmacology, including drug mechanisms, classifications, and interactions.',
    learningObjectives: [
      'Understand drug classifications and mechanisms.',
      'Analyze drug interactions and side effects.',
      'Apply pharmacological principles in clinical settings.'
    ],
    requirements: [
      'Basic chemistry knowledge.',
      'Interest in pharmacology.',
      'Familiarity with medical terms.'
    ],
    chapters: [
      { title: 'Drug Classifications', video: 'https://example.com/video1.mp4' },
      { title: 'Mechanisms of Action', video: 'https://example.com/video2.mp4' },
      { title: 'Pharmacokinetics and Dynamics', video: 'https://example.com/video3.mp4' }
    ]
  },
  {
    id: 3,
    title: 'Clinical Nutrition and Dietetics',
    description: 'Understand the role of nutrition in health and disease, and learn how to create effective dietary plans.',
    image: img3,
    duration: '40 hours',
    rating: 4.7,
    overview: 'Explore the principles of clinical nutrition and dietetics, focusing on nutritional assessment, dietary planning, and therapeutic diets.',
    learningObjectives: [
      'Understand nutritional needs and dietary planning.',
      'Analyze the impact of diet on health conditions.',
      'Develop therapeutic diets for various health conditions.'
    ],
    requirements: [
      'Basic nutrition knowledge.',
      'Interest in dietetics.',
      'Access to dietary assessment tools.'
    ],
    chapters: [
      { title: 'Nutritional Assessment', video: 'https://example.com/video1.mp4' },
      { title: 'Dietary Planning', video: 'https://example.com/video2.mp4' },
      { title: 'Therapeutic Diets', video: 'https://example.com/video3.mp4' }
    ]
  }
];

const MedicineDetails = () => {
  const { id } = useParams();
  const course = courseData.find(c => c.id === parseInt(id));
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(0); // For progress tracker

  useEffect(() => {
    if (enrolled) {
      setShowFeedback(true);
      setProgress(50); // Example progress value; update based on actual progress
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
    <div className="medicine-details-container">
      <div className="medicine-details-header">
        <img src={course.image} alt={course.title} className="medicine-details-header__image" />
        <div className="medicine-details-header__info">
          <h1 className="medicine-details-header__title">{course.title}</h1>
          <p className="medicine-details-header__description">{course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Rating:</strong> {course.rating} / 5</p>
        </div>
      </div>

      {enrolled ? (
        <>
          <button
            className="medicine-details-explore-button"
            onClick={() => document.getElementById('chapters').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Now
          </button>
        </>
      ) : (
        <button
          onClick={() => setShowPaymentForm(true)}
          className="medicine-details-enroll-button"
        >
          Enroll Now
        </button>
      )}

      {showPaymentForm && (
        <div className="medicine-details-overlay">
          <div className="medicine-details-form-container">
            <h2 className="medicine-details-form-title">Payment Form</h2>
            <form onSubmit={handlePaymentSubmit}>
              <div className="medicine-details-form-group">
                <label className="medicine-details-label">Name</label>
                <input type="text" className="medicine-details-input" required />
              </div>
              <div className="medicine-details-form-group">
                <label className="medicine-details-label">Email</label>
                <input type="email" className="medicine-details-input" required />
              </div>
              <div className="medicine-details-form-group">
                <label className="medicine-details-label">Phone Number</label>
                <input type="tel" className="medicine-details-input" required />
              </div>
              <div className="medicine-details-form-group">
                <label className="medicine-details-label">Credit Card Number</label>
                <input type="text" className="medicine-details-input" required />
              </div>
              <div className="medicine-details-form-group">
                <label className="medicine-details-label">Expiration Date</label>
                <input type="text" className="medicine-details-input" placeholder="MM/YY" required />
              </div>
              <div className="medicine-details-form-group">
                <label className="medicine-details-label">CVV</label>
                <input type="text" className="medicine-details-input" required />
              </div>
              <div className="medicine-details-form-actions">
                <button type="submit" className="medicine-details-submit-button">Submit</button>
                <button type="button" onClick={() => setShowPaymentForm(false)} className="medicine-details-cancel-button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="medicine-details-divider"></div>

      <div className="medicine-details-section">
        <h2 className="medicine-details-section__title">Course Overview</h2>
        <p>{course.overview}</p>
      </div>

      <div className="medicine-details-section">
        <h2 className="medicine-details-section__title">Learning Objectives</h2>
        <ul className="medicine-details-list">
          {course.learningObjectives.map((objective, index) => (
            <li key={index} className="medicine-details-list-item">{objective}</li>
          ))}
        </ul>
      </div>

      <div className="medicine-details-section">
        <h2 className="medicine-details-section__title">Requirements</h2>
        <ul className="medicine-details-list">
          {course.requirements.map((requirement, index) => (
            <li key={index} className="medicine-details-list-item">{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="medicine-details-divider"></div>
      
      {enrolled && (
        <div id="chapters" className="medicine-details-section">
          <h2 className="medicine-details-section__title">Course Chapters</h2>
          {course.chapters.map((chapter, index) => (
            <div key={index} className="medicine-details-chapter">
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
        <div className="medicine-details-feedback">
          <h2 className="medicine-details-feedback__title">Feedback</h2>
          {submitted ? (
            <p>Thank you for your feedback!</p>
          ) : (
            <form onSubmit={handleFeedbackSubmit}>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                className="medicine-details-feedback__input"
                rows="4"
                placeholder="Leave your feedback here"
                required
              ></textarea>
              <button type="submit" className="medicine-details-feedback__submit-button">Submit Feedback</button>
            </form>
          )}
        </div>
      )}

      <div className="medicine-details-divider"></div>

      <div className="medicine-details-related-courses">
        <h2 className="medicine-details-related-courses__title">Related Courses</h2>
        {courseData.filter(c => c.id !== course.id).map((relatedCourse) => (
          <div key={relatedCourse.id} className="medicine-details-related-course">
            <img src={relatedCourse.image} alt={relatedCourse.title} className="medicine-details-related-course__image" />
            <div className="medicine-details-related-course__info">
              <h3 className="medicine-details-related-course__title">{relatedCourse.title}</h3>
              <p className="medicine-details-related-course__description">{relatedCourse.description}</p>
              <a href={`/courses/${relatedCourse.id}`} className="medicine-details-related-course__link">View Details</a>
            </div>
          </div>
        ))}
      </div>

      <div className="medicine-details-divider"></div>

      <div className="medicine-details-calendar">
        <h2 className="medicine-details-calendar__title">Upcoming Events</h2>
        <div className="medicine-details-calendar__container">
          <div className="medicine-details-calendar__event">
            <p className="medicine-details-calendar__event-date">August 15, 2024</p>
            <p className="medicine-details-calendar__event-description">Live webinar on advanced medical topics.</p>
          </div>
          {/* Add more events dynamically here */}
        </div>
      </div>

      <div className="medicine-details-divider"></div>
    </div>
  );
};

export default MedicineDetails;
