// src/components/Maintenance.jsx
import React from 'react';
import './Maintenance.css';  // Custom CSS (see below)

export default function MaintenancePage() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        {/* Optional: include Vaayu logo if available */}
        {/* <img src="/logo.png" alt="Vaayu Logo" className="maintenance-logo" /> */}
        <h1>Vaayu website is under maintenance</h1>
        <p>We’ll be back shortly with a powerful cooling experience.</p>
      </div>
    </div>
  );
}
