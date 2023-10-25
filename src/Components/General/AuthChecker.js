import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthChecker = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Check authentication by sending a request to your backend
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}users/authenticate`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the JWT token from localStorage
          },
        });

        if (response.status === 200) {
          // User is authenticated
          setAuthenticated(true);
        }
      } catch (error) {
        // Handle authentication errors
        console.error('Authentication error:', error);
      }
    };

    checkAuthentication();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return authenticated ? <>{children}</> : null;
};

export default AuthChecker;
