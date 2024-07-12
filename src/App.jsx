// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import GetStartPage from './components/GetStartPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<GetStartPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
