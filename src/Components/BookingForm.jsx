import React, { useState } from 'react';
import { bookFlight } from '../servieses/bookingService';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    flightNumber: '',
    date: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bookFlight(formData);
      if (response.success) {
        setMessage('Booking successful!');
        setFormData({ name: '', email: '', flightNumber: '', date: '' }); // Reset form
      } else {
        setMessage('Booking failed. Please try again.');
      }
    } catch  {
      setMessage('Error booking flight.');
    }
  };

  return (
    <div>
      <h2>Book a Flight</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="flightNumber"
          placeholder="Flight Number"
          value={formData.flightNumber}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
