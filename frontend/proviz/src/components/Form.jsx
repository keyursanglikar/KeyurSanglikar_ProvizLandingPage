import React, { useState } from 'react';
import axios from 'axios';
import './styles/Form.css';
import close from '../assets/images/close.png';

const ApplicationForm = ({onClose}) => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Ensure fallback to localhost if env variable is not set
  const [formData, setFormData] = useState({
    name: '',
    phoneno: '', // Changed to match the backend field name
    email: '',
    statement: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle phone number validation
  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/; // Basic phone number validation (10 digits)
    return phonePattern.test(phone);
  };

  // Check if user already exists before submitting the form
  const checkIfUserExists = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/users/Check`, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // If user exists, return true and message
      if (response.data.exists) {
        setMessage('User already exists');
        return true; // User exists, return true
      }

      // No user found, return false
      return false;
    } catch (error) {
      setMessage('Error checking user existence');
      return false; // Assume no user found in case of error
    }
  };

  // Submit the form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading indicator
    setMessage(''); // Clear any previous messages

    // Validate phone number before submitting
    if (!validatePhone(formData.phoneno)) {
      setMessage('Please enter a valid phone number (10 digits).');
      setIsLoading(false);
      return;
    }

    // Check if user exists before submitting
    const userExists = await checkIfUserExists();
    if (userExists) {
      setIsLoading(false); // Stop form submission if user exists
      return;
    }

    // Proceed with form submission if no user exists
    try {
      const response = await axios.post(
        `${apiUrl}/api/users/Application`, 
        formData, 
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      setMessage(response.data.message);
      setFormData({ name: '', phoneno: '', email: '', statement: '' }); // Clear form after submission
    } catch (error) {
      // Better error handling
      setMessage(error.response ? error.response.data.message : 'Error submitting form , I Think user Already exists add new Email');
    } finally {
      setIsLoading(false); // Hide loading indicator after submission
    }
  };

  return (
    <div className="application-form">
      <form onSubmit={handleSubmit}>
      <p id="close-button" onClick={onClose}>
          <img src={close} alt="Close" />
        </p>
      <h2 className="AF">Application Form</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="phoneno" // Changed to match backend field
          value={formData.phoneno}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="statement"
          value={formData.statement}
          onChange={handleChange}
          placeholder="Brief Statement"
          required
        ></textarea>
        <p onClick={handleSubmit} id="Formbtn" className="submit-button">
          {isLoading ? 'Submitting...' : 'Submit Application'}
        </p>
      </form>
      {message && (
        <p className={message.includes('Error') ? 'error-message' : 'success-message'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default ApplicationForm;
