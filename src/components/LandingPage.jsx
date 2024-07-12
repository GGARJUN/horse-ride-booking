// src/components/LandingPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  ArchiveIcon,
} from "@heroicons/react/outline"; // Ensure this import is correct
import heroImage from "../assets/1.jpg";

const horses = ["Thoroughbred", "Quarter Horse", "Arabian", "Gaited Horses"];

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close the menu when a section is selected
  };

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here (e.g., send data to backend or display message)
      console.log(formData);
      // Reset form fields
      setFormData({ name: '', email: '', phone: '', message: '' });
    };

  return (
    // bg-[#B200AB]/90
    <div className="min-h-screen flex flex-col bg-[#0c0a43] ">
      <div className="min-h-screen  bg-white/30  mx-5 my-5 rounded-lg ">
        {/* Navbar */}
        <nav className="  px-5 py-1  rounded-lg flex justify-between items-center  z-10">
          <img
            src="images/start.png"
            alt=""
            className="h-14 md:h-14 lg:h-14 z-10 drop-shadow-2xl"
          />
          <div className="hidden md:flex space-x-8 ">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-[#48E4EE] flex items-center gap-1 text-sm font-semibold"
            >
              <HomeIcon className="h-5 w-5" /> Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#48E4EE] flex items-center gap-1 text-sm font-semibold"
            >
              <InformationCircleIcon className="h-5 w-5" /> About
            </button>
            <button
              onClick={() => scrollToSection("available-horses")}
              className="text-white hover:text-[#48E4EE] flex items-center gap-1 text-sm font-semibold"
            >
              <ArchiveIcon className="h-5 w-5" /> Available Horses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#48E4EE] flex items-center gap-1 text-sm font-semibold"
            >
              <PhoneIcon className="h-5 w-5" /> Contact
            </button>
          </div>
          <div className="md:flex hidden">
            <button className="font-semibold bg-[#0c0a43] hover:bg-white hover:text-black transition-all duration-200 ease-in-out px-6 py-2 rounded-lg text-white">
              Register
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6 text-white" />
              ) : (
                <MenuIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/30 text-white flex flex-col  items-center w-60 rounded-md  fixed top-24 left-44 right-0 z-10"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="py-2 hover:bg-[#48E4EE] hover:text-black w-full flex justify-center rounded-md items-center gap-1 text-sm font-semibold"
            >
              <HomeIcon className="h-5 w-5" /> Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 hover:bg-[#48E4EE] hover:text-black w-full flex justify-center rounded-md items-center gap-1 text-sm font-semibold"
            >
              <InformationCircleIcon className="h-5 w-5" /> About
            </button>
            <button
              onClick={() => scrollToSection("available-horses")}
              className="py-2 hover:bg-[#48E4EE] hover:text-black w-full flex justify-center rounded-md items-center gap-1 text-sm font-semibold"
            >
              <ArchiveIcon className="h-5 w-5" /> Available Horses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 hover:bg-[#48E4EE] hover:text-black w-full flex justify-center rounded-md items-center gap-1 text-sm font-semibold"
            >
              <PhoneIcon className="h-5 w-5" /> Contact
            </button>
          </motion.div>
        )}

        {/* Hero Section */}
        <section
          id="home"
          className="bg-cover bg-center h-screen text-white flex items-center mx-4 my-3 rounded-lg justify-center mt-16 md:mt-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="text-center mx-2 md:p-4 p-2 mt-60 bg-black/50 rounded-md">
            <h1 className="md:text-5xl text-2xl font-bold mb-4">
              Welcome to Horse Ride Booking
            </h1>
            <p className="md:text-lg text-sm mb-8">
              Experience the thrill of horse riding with ease and reliability.
            </p>
            <Link to="/book">
              <button className="md:px-6 md:py-3 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded shadow hover:from-blue-600 hover:to-purple-700 transition">
                Book Now
              </button>
            </Link>
          </div>
        </section>
        </div>

        {/* About Section */}
        <section
          id="about"
          className="py-16 px-8 bg-opacity-50  backdrop-blur-lg"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 2 }}
                transition={{ duration: 0.9, delay:1}}
                className="flex flex-col justify-center bg-white bg-opacity-75 p-8 rounded-lg backdrop-blur-lg"
              >
                <p className="text-lg mb-4">
                  We provide a unique and enjoyable horse riding experience for
                  all ages. Our horses are well-trained and our staff is
                  experienced.
                </p>
                <p className="text-lg mb-4">
                  Safety is our top priority, and we ensure that all our rides
                  are safe and enjoyable. Book your ride today and experience
                  the adventure!
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  src="images/5.jpg"
                  alt="Horse riding 1"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  src="images/2.jpg"
                  alt="Horse riding 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  src="images/3.jpg"
                  alt="Horse riding 3"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  src="images/4.jpg"
                  alt="Horse riding 4"
                  className="w-full h-[150px] object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Available Horses Section */}
        <motion.div
          id="available-horses"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center p-4 mt-8"
        >
          <h1 className="text-3xl font-bold mb-8 text-white">Available Horses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {horses.map((horse, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img
                  src={`images/${horse}.jpg`}
                  alt={horse}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-xl font-semibold mb-2">{horse}</h2>
                <Link to="/book">
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-8 mt-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

        {/* Footer */}
        <footer className=" text-white p-2 mt-12 bg-black/50">
          <div className="container mx-auto text-center">
            <p className="mb-4">
              &copy; 2024 Horse Ride Booking. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("available-horses")}
                className="text-white"
              >
                Available Horses
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white"
              >
                Contact
              </button>
            </div>
          </div>
        </footer>
      </div>
    
  );
};

export default LandingPage;
