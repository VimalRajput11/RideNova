const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Driver', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=alice' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Passenger', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=bob' },
  { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Passenger', status: 'Blocked', avatar: 'https://i.pravatar.cc/150?u=charlie' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Driver', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=diana' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'Passenger', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=ethan' },
];

const rides = [
  { id: 101, driver: 'Alice Johnson', from: 'New York', to: 'Boston', date: '2026-10-15', time: '08:00 AM', status: 'Scheduled', price: '$45', seats: 3 },
  { id: 102, driver: 'Diana Prince', from: 'San Francisco', to: 'Los Angeles', date: '2026-10-18', time: '09:30 AM', status: 'Completed', price: '$55', seats: 0 },
  { id: 103, driver: 'Alice Johnson', from: 'Boston', to: 'New York', date: '2026-10-20', time: '04:00 PM', status: 'Cancelled', price: '$45', seats: 4 },
];

const stats = {
  totalUsers: 1450,
  totalRides: 4200,
  revenue: '$85,400',
  activeDrivers: 320
};

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
  { name: 'Jul', revenue: 3490 },
];

export { users, rides, stats, revenueData };
