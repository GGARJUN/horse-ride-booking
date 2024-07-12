import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { generateCalendarInvite } from '../utils/calendarInvite';
import { motion } from 'framer-motion';

const horses = ['Lightning', 'Thunder', 'Shadow', 'Blaze'];
const timeSlots = [
  '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM',
  '6:00 PM - 7:00 PM', '7:00 PM - 8:00 PM', '8:00 PM - 9:00 PM',
  '9:00 PM - 10:00 PM', '10:00 PM - 11:00 PM', '11:00 PM - 12:00 AM',
];

const schema = yup.object().shape({
  horse: yup.string().required('Please select a horse'),
  date: yup.string().required('Please select a date'),
  time: yup.string().required('Please select a time slot'),
  name: yup.string().required('Please enter your name'),
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  phone: yup.string().required('Please enter your phone number')
});

const BookingForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    generateCalendarInvite(data);
    navigate('/confirmation', { state: { bookingDetails: data } });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="min-h-screen flex flex-col items-center bg-[#010023] p-4"
    >
      <h1 className="text-3xl font-bold mb-8 text-white">Book Your Ride</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Horse</label>
          <Controller
            name="horse"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded">
                <option value="" disabled>Select a horse</option>
                {horses.map((horse, index) => (
                  <option key={index} value={horse}>{horse}</option>
                ))}
              </select>
            )}
          />
          {errors.horse && <p className="text-red-500 text-sm">{errors.horse.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Choose Date</label>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <input type="date" {...field} className="w-full p-2 border rounded" />
            )}
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Choose Time Slot</label>
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded">
                <option value="" disabled>Select a time slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            )}
          />
          {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input type="text" {...field} className="w-full p-2 border rounded" />
            )}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input type="email" {...field} className="w-full p-2 border rounded" />
            )}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input type="tel" {...field} className="w-full p-2 border rounded" />
            )}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
        <motion.button 
          type="submit" 
          whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }} 
          whileTap={{ scale: 0.95 }} 
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default BookingForm;
