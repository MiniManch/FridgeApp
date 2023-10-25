import React, { useState } from 'react';
import styles from '../../Style/SignUp.module.css';
import MessageModal from '../General/MessageModal';
import axios from 'axios';

const desiredTimeoutForMessage = 4000;

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const NewFormData = new FormData();
      NewFormData.append('username', formData.username);
      NewFormData.append('password', formData.password);
      NewFormData.append('email', formData.email);

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}users/create`, NewFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) { // Check the status code
        setShowSuccessModal(true);

        // Redirect to /login after 4 seconds
        setTimeout(() => {
          window.location.href = '/login'; 
        }, desiredTimeoutForMessage);
      } else {
        console.log(response);
        // const data = await response.json();
        // console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    window.location.href = '/login'; // Redirect to /login immediately
  };
  
  

  return (
    <div className={styles.signUp}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>

      {showSuccessModal && (
        <MessageModal
          type="success"
          message="Signed up successfully!"
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default SignUp;
