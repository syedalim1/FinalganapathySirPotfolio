import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaCloud,
  FaNetworkWired,
  FaCode,
  FaBrain,
  FaChartLine,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";

const areasOfInterest = [
  { name: "Machine Learning", icon: <FaRobot /> },
  { name: "Artificial Intelligence", icon: <FaBrain /> },
  { name: "Natural Language Processing", icon: <FaCode /> },
  { name: "Cloud Computing", icon: <FaCloud /> },
  { name: "Data Mining", icon: <FaChartLine /> },
  { name: "Networking", icon: <FaNetworkWired /> },
  { name: "Web Designing", icon: <FaPaintBrush /> },
  { name: "Data Structure", icon: <FaServer /> },
];

const AreaOfInterest = () => {
  return (
    <section className="relative py-20 overflow-hidden ">
      {/* Animated background particles */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <div className="absolute w-24 h-24 bg-purple-500 rounded-full blur-xl top-20 left-20 animate-pulse" />
        <div className="absolute w-32 h-32 bg-pink-500 rounded-full blur-xl bottom-10 right-20 animate-pulse delay-100" />
      </motion.div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Animated title with gradient text */}
        <motion.h2
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 120,
          }}
        >
          Areas of Expertise
        </motion.h2>

        {/* Grid with staggered animations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {areasOfInterest.map((interest, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-default"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", bounce: 0.4 },
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: Math.random() * 4 - 2, // Random slight rotation between -2 and 2 degrees
              }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon with animation */}
              <motion.div
                className="text-5xl mb-4 text-pink-400 group-hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {interest.icon}
              </motion.div>

              {/* Text with animated border */}
              <h3 className="text-xl font-semibold text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300">
                {interest.name}
              </h3>

              {/* Decorative elements */}
              <div className="absolute -inset-1 rounded-2xl border-2 border-white/20 group-hover:border-yellow-400/50 transition-all duration-500" />
              <div className="absolute -inset-2 rounded-2xl border-2 border-white/10 group-hover:border-pink-400/30 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          className="mt-16 text-white/60 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <svg
            className="w-8 h-8 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default AreaOfInterest;
