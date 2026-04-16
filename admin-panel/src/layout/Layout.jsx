import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiMap, FiBarChart2 } from 'react-icons/fi';
import { FaCarSide } from 'react-icons/fa';
import './Layout.css';

const Layout = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Dashboard';
      case '/users': return 'Users Management';
      case '/rides': return 'Rides Overview';
      case '/reports': return 'Reports & Analytics';
      default: return 'RideNova Admin';
    }
  };

  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <FaCarSide size={28} />
          <span>RideNova</span>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiHome className="nav-icon" /> Dashboard
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiUsers className="nav-icon" /> Users
          </NavLink>
          <NavLink to="/rides" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiMap className="nav-icon" /> Rides
          </NavLink>
          <NavLink to="/reports" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiBarChart2 className="nav-icon" /> Reports
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="navbar">
          <h2 className="nav-title">{getPageTitle()}</h2>
          <div className="user-profile">
            <span style={{ fontWeight: 500 }}>Admin User</span>
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=007AFF&color=fff" alt="Admin" className="profile-img" />
          </div>
        </header>

        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
