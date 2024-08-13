import React, { useState } from 'react';
import axios from 'axios';
import './ArtsDetailsForm.css';

const ArtsDetailsForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState('');
  const [overview, setOverview] = useState('');
  const [objectives, setObjectives] = useState('');
  const [requirements, setRequirements] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !duration || !rating || !overview || !objectives || !requirements || !image) {
        setError('Please fill in all fields and upload an image');
        return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('rating', rating);
    formData.append('overview', overview);
    formData.append('objectives', objectives);
    formData.append('requirements', requirements);
    formData.append('image', image);

    try {
        const response = await axios.post('http://localhost:8080/api/arts-science-details/addartsdetails', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        setSuccess('Course added successfully');
        setError('');
      } catch (err) {
        console.error(err.response ? err.response.data : err.message); // Log full error response
        setError('Failed to add course');
        setSuccess('');
    }
    
};

  return (
    <div className="agri-details-form-container">
      <h2 className="agri-details-form-title">Add Arts and Science Course Details</h2>
      {error && <p className="agri-details-form-error">{error}</p>}
      {success && <p className="agri-details-form-success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="agri-details-form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="agri-details-form-input"
            required
          />
        </div>

        <div className="agri-details-form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="agri-details-form-input"
            required
          ></textarea>
        </div>

        <div className="agri-details-form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="agri-details-form-input"
            required
          />
        </div>

        <div className="agri-details-form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="agri-details-form-input"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="agri-details-form-group">
          <label htmlFor="overview">Course Overview</label>
          <textarea
            id="overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            className="agri-details-form-input"
            required
          ></textarea>
        </div>

        <div className="agri-details-form-group">
          <label htmlFor="objectives">Learning Objectives</label>
          <textarea
            id="objectives"
            value={objectives}
            onChange={(e) => setObjectives(e.target.value)}
            className="agri-details-form-input"
            placeholder="Separate objectives with semicolons"
            required
          ></textarea>
        </div>

        <div className="agri-details-form-group">
          <label htmlFor="requirements">Requirements</label>
          <textarea
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="agri-details-form-input"
            placeholder="Separate requirements with semicolons"
            required
          ></textarea>
        </div>

        <div className="agri-details-form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="agri-details-form-input"
            required
          />
        </div>

        <button type="submit" className="agri-details-submit-button">Add Course</button>
      </form>
    </div>
  );
};

export default ArtsDetailsForm;
