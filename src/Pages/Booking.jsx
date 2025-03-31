import React, { useState } from 'react';

const Booking = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookingType: 'hotel', // default to 'hotel'
    checkInDate: '',
    checkOutDate: '',
    carModel: '',
    flightDate: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      bookingType: 'hotel',
      checkInDate: '',
      checkOutDate: '',
      carModel: '',
      flightDate: '',
    });
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Booking Type */}
        <div className="form-group">
          <label htmlFor="bookingType">Booking Type</label>
          <select
            id="bookingType"
            name="bookingType"
            value={formData.bookingType}
            onChange={handleChange}
            required
          >
            <option value="hotel">Hotel</option>
            <option value="car">Car</option>
            <option value="flight">Flight</option>
          </select>
        </div>

        {/* Conditional Inputs based on Booking Type */}
        {formData.bookingType === 'hotel' && (
          <>
            <div className="form-group">
              <label htmlFor="checkInDate">Check-in Date</label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">Check-out Date</label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {formData.bookingType === 'car' && (
          <div className="form-group">
            <label htmlFor="carModel">Car Model</label>
            <input
              type="text"
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.bookingType === 'flight' && (
          <div className="form-group">
            <label htmlFor="flightDate">Flight Date</label>
            <input
              type="date"
              id="flightDate"
              name="flightDate"
              value={formData.flightDate}
            onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
