import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
