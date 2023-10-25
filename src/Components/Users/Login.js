import React, { useState } from 'react';
import styles from '../../Style/LoginForm.module.css'; // Import your CSS module
import MessageModal from '../General/MessageModal'; // Import your MessageModal component

const desiredTimeoutForMessage = 4000;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal
  const [message, setMessage] = useState(''); // Message for the success modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(JSON.stringify(formData))
      const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login was successful
        // Show success message
        setMessage("You've logged in successfully!");
        setShowSuccessModal(true);

        // Save email and token in localStorage
        const data = await response.json();
        localStorage.setItem('email', formData.email);
        localStorage.setItem('token', data.token);

        // Redirect to the homepage after a delay
        setTimeout(() => {
          window.location.href = '/';
        }, desiredTimeoutForMessage);
      } else {
        // Handle login error, e.g., show an error message
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>

      {showSuccessModal && (
        <MessageModal
          type="success"
          message={message}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Login;
