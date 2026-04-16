export const ridesData = [
  {
    id: 'r1',
    driver: {
      name: 'Michael Doe',
      rating: 4.8,
      avatar: 'https://i.pravatar.cc/150?u=mich',
      car: { color: 'Black', model: 'Toyota Camry' }
    },
    from: 'Los Angeles',
    to: 'San Francisco',
    date: '10 Oct',
    time: '08:00 AM',
    price: 45,
    seatsLeft: 3,
    duration: '6h 30m',
  },
  {
    id: 'r2',
    driver: {
      name: 'Sarah Smith',
      rating: 4.9,
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      car: { color: 'White', model: 'Honda Civic' }
    },
    from: 'New York',
    to: 'Boston',
    date: '12 Oct',
    time: '10:30 AM',
    price: 35,
    seatsLeft: 1,
    duration: '4h 15m',
  },
];

export const userProfile = {
  id: 'u1',
  name: 'John Passenger',
  email: 'john@example.com',
  rating: 4.7,
  avatar: 'https://i.pravatar.cc/150?u=john',
  role: 'Passenger' // or 'Driver'
};

export const chatsData = [
  {
    id: 'c1',
    sender: 'Michael Doe',
    lastMessage: 'I am arriving in 5 mins!',
    time: '10:20 AM',
    avatar: 'https://i.pravatar.cc/150?u=mich',
  }
];

export const myDriverRides = [
  {
    id: 'dr1',
    from: 'Seattle',
    to: 'Portland',
    date: '20 Oct',
    time: '09:00 AM',
    revenue: 120,
    status: 'Upcoming'
  }
];
