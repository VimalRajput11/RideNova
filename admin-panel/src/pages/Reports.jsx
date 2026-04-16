import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { revenueData } from '../data/dummyData';
import './Dashboard.css'; // Reusing some base styles

const Reports = () => {
  return (
    <div>
      <div className="page-header">
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Reports & Monthly Data</h3>
      </div>
      
      <div className="chart-section" style={{ height: '500px' }}>
        <h3 className="section-title">Revenue by Month</h3>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" stroke="#cbd5e1" tick={{ fill: '#64748b' }} />
            <YAxis stroke="#cbd5e1" tick={{ fill: '#64748b' }} />
            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Legend />
            <Bar dataKey="revenue" fill="#007AFF" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
