import React, { useState, useEffect } from 'react';
import './customer.css';

export default function CustomerHome() {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem('customerData');
    if (data) {
      setCustomerData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="customer-home-container">
      <h2>Customer Home</h2>
      {customerData ? (
        <div className="customer-info-card">
          <h3>Welcome, {customerData.fullName}!</h3>
          <div className="customer-details">
            <p><strong>Username:</strong> {customerData.username}</p>
            <p><strong>Email:</strong> {customerData.email}</p>
            <p><strong>Phone:</strong> {customerData.phone}</p>
            <p><strong>Address:</strong> {customerData.address}</p>
            <p><strong>City:</strong> {customerData.city}</p>
            <p><strong>State:</strong> {customerData.state}</p>
            <p><strong>Postal Code:</strong> {customerData.postalCode}</p>
          </div>
        </div>
      ) : (
        <p>Please log in to view your information.</p>
      )}
    </div>
  );
}
