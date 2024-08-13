import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/api/contact/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); 
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    }
};


  return (
    <div className="contact-page">
      <div className="contact-us-container">
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-description">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <div className="contact-us-form-group">
            <label htmlFor="name" className="contact-us-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-us-input"
            />
          </div>
          <div className="contact-us-form-group">
            <label htmlFor="email" className="contact-us-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-us-input"
            />
          </div>
          <div className="contact-us-form-group">
            <label htmlFor="message" className="contact-us-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-us-textarea"
            ></textarea>
          </div>
          <button type="submit" className="contact-us-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
