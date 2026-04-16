import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { users as initialUsers } from '../data/dummyData';
import './Pages.css';

const Users = () => {
  const [users, setUsers] = useState(initialUsers);

  const toggleStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'Active' ? 'Blocked' : 'Active' };
      }
      return u;
    }));
  };

  return (
    <div>
      <div className="page-header">
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>All Users</h3>
      </div>
      
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="user-cell">
                    <img src={user.avatar} alt={user.name} className="user-avatar" />
                    <span className="user-name">{user.name}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status-badge status-${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn" onClick={() => toggleStatus(user.id)}>
                    {user.status === 'Active' ? 'Block' : 'Unblock'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
