import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminContact.css';

const AdminContact = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/contact/messages');
        setMessages(response.data || []); // Set messages from response data
      } catch (error) {
        console.error('Failed to fetch messages:', error);
        setError('Failed to fetch messages');
      }
    };

    fetchMessages();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="admin-contact-page">
      <div className="admin-contact-container">
        <h1>Messages</h1>
        {messages.length === 0 ? (
          <p>No messages available.</p>
        ) : (
          <table className="messages-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr key={index}>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminContact;
