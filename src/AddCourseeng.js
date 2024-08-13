import React, { useState } from 'react';
import './AddCourseeng.css';
import axios from 'axios';

const AddCourseeng = () => {
  const [image, setImage] = useState(null); // Use state for image file
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      setError('All fields are required');
      return;
    }

    // Create a FormData object to hold the form data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      // Send the form data to the backend using axios
      await axios.post('http://localhost:8080/api/courses/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file upload
        },
      });
      console.log('Course Added');
      setError('');

      // Clear form fields
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Error adding course:', error);
      setError('Failed to add course');
    }
  };

  return (
    <div className="add-course-container">
       <h1 className="page-title">Add Engineering Courses</h1>
      <form className="add-course-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Course Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Course Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">Course Image</label>
          <input
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])} // Handle file upload
            className="form-input"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourseeng;
