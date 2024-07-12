import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

const GetStartPage = () => {
  return (
    <>
     
      <div className="flex border-animate justify-center items-center flex-col h-screen bg-[#0c0a43] relative overflow-hidden">
        <motion.div
          className="bg-black/40 rounded-lg h-[450px] w-[90%] sm:w-[80%] md:w-[700px] lg:w-[900px] xl:w-[1000px] z-20 border"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-40 flex justify-center items-center">
            <motion.h1
              className="z-10 font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Horse Riding Booking System
            </motion.h1>
          </div>
          <div className="h-40 flex justify-center items-center">
            <motion.img
              src="images/start.png"
              alt=""
              className="h-40 md:h-48 lg:h-56 z-10 drop-shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <Link to={"/landing"}>
            <motion.div
              className="flex justify-center items-center gap-5 z-10 text-white relative top-12 px-5 py-3 rounded-full bg-black/20 mx-auto w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] hover:bg-[#010023] transition-all ease-in-out duration-150 hover:translate-x-1 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className="font-semibold text-lg md:text-xl">Get Started</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          className="circlePosition w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[590px] lg:h-[400px] bg-[#B200AB] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[150px] z-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default GetStartPage;
