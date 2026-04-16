import React from 'react';
import { FiUsers, FiMap, FiDollarSign, FiActivity } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { stats, revenueData } from '../data/dummyData';
import './Dashboard.css';

const Dashboard = () => {
  const statCards = [
    { title: 'Total Users', value: stats.totalUsers, icon: <FiUsers />, color: '#007AFF', bg: '#E0F2FE' },
    { title: 'Total Rides', value: stats.totalRides, icon: <FiMap />, color: '#10B981', bg: '#D1FAE5' },
    { title: 'Revenue', value: stats.revenue, icon: <FiDollarSign />, color: '#F59E0B', bg: '#FEF3C7' },
    { title: 'Active Drivers', value: stats.activeDrivers, icon: <FiActivity />, color: '#8B5CF6', bg: '#EDE9FE' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        {statCards.map((card, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon-wrapper" style={{ backgroundColor: card.bg, color: card.color }}>
              {card.icon}
            </div>
            <div className="stat-info">
              <span className="stat-title">{card.title}</span>
              <span className="stat-value">{card.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="chart-section">
        <h3 className="section-title">Revenue Overview</h3>
        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer>
            <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#007AFF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#007AFF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#cbd5e1" tick={{ fill: '#64748b' }} />
              <YAxis stroke="#cbd5e1" tick={{ fill: '#64748b' }} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#007AFF" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
