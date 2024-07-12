// src/components/BookingConfirmation.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state || {};

  const handleGoBack = () => {
    navigate('/');
  };

  if (!bookingDetails) {
    return <div>Booking details not available.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4"
    >
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-lg mb-4">Thank you for booking a ride with us.</p>
        <p className="text-lg mb-4">Horse: <span className="font-bold">{bookingDetails.horse}</span></p>
        <p className="text-lg mb-4">Date: <span className="font-bold">{bookingDetails.date}</span></p>
        <p className="text-lg mb-4">Time: <span className="font-bold">{bookingDetails.time}</span></p>
        <button
          onClick={handleGoBack}
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
        >
          Go Back to Home
        </button>
      </div>
    </motion.div>
  );
};

export default BookingConfirmation;
