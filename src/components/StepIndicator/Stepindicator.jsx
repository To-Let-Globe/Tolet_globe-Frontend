import React from 'react';
import './StepIndicator.css';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-container">
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
      <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>4</div>
    </div>
  );
};

export default ProgressBar;
