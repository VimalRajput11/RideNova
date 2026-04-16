import React from 'react';
import { rides } from '../data/dummyData';
import './Pages.css';

const Rides = () => {
  return (
    <div>
      <div className="page-header">
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Rides Overview</h3>
      </div>
      
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Driver</th>
              <th>Route</th>
              <th>Date & Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rides.map(ride => (
              <tr key={ride.id}>
                <td style={{ fontWeight: 500 }}>#{ride.id}</td>
                <td>{ride.driver}</td>
                <td>{ride.from} → {ride.to}</td>
                <td>{ride.date} {ride.time}</td>
                <td>{ride.price}</td>
                <td>
                  <span className={`status-badge status-${ride.status.toLowerCase()}`}>
                    {ride.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rides;
