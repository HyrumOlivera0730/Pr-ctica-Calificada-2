import React from 'react';
import './FeatureBox.css';
const FeatureBox = ({ title, description, icon }) => {
  return (
    <div className="feature-box">
      <h4>{title}</h4>
      <p>{description}</p>
      <img className="icon" src={icon}/>
    </div>
  );
};

export default FeatureBox;
