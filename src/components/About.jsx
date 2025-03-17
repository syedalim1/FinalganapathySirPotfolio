import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

import HeroSection from "./about/HeroSection";
import AboutSection from "./about/AboutSection";
import PersonalSection from "./about/PersonalSection";
import HobbiesSection from "./about/HobbiesSection";

// Personal Profile Data
const PersonalProfile = {
  name: "N.Ganapathiram",
  age: 26,
  dob: "01-06-1998",
  fathersName: "T.G Narayanan",
  mothersName: "N.Meenakshi Sundari",
  gender: "Male",
  maritalStatus: "Unmarried",
  nationality: "Indian",
  languagesKnown: ["Tamil", "English"],
  hobbies: [
    "Playing",
    "Travelling",
    "Cricket",
    "Volunteering",
    "Cooking",
    "Gardening",
    "Listening to Music",
  ],
};



// Color themes
const themes = {
  light: {
    primary: "bg-white",
    text: "text-gray-800",
    accent: "bg-indigo-500",
    secondary: "bg-gray-100",
    highlight: "bg-indigo-100",
    border: "border-indigo-200",
    cardBg: "bg-white",
    buttonBg: "bg-indigo-500",
    buttonText: "text-white",
    navBg: "bg-indigo-600",
  },
  dark: {
    primary: "bg-gray-900",
    text: "text-gray-100",
    accent: "bg-indigo-600",
    secondary: "bg-gray-800",
    highlight: "bg-indigo-900",
    border: "border-indigo-800",
    cardBg: "bg-gray-800",
    buttonBg: "bg-indigo-600",
    buttonText: "text-white",
    navBg: "bg-gray-900",
  },
};

const App = () => {
  const [floatingIndex, setFloatingIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const theme = isDarkMode ? themes.dark : themes.light;

  // For particle background effect
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for background effect
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: isDarkMode ?
        `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, 255, ${Math.random() * 0.3 + 0.1})` :
        `rgba(100, 100, 255, ${Math.random() * 0.2 + 0.1})`,
    }));
    setParticles(newParticles);
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIndex(
        Math.floor(Math.random() * Object.keys(PersonalProfile).length)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [controls]);





  return (
    <div className={`  ${theme.text} overflow-x-hidden`}>
      {/* Particle Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: particle.speed * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <HeroSection />
      <AboutSection />

      <PersonalSection />
      <HobbiesSection />

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full ${isDarkMode ? "bg-indigo-600" : "bg-indigo-500"} text-white   z-50`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          scale: scrollYProgress.get() > 0.1 ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default App;