import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaCalendarAlt,
  FaGlobe,
  FaHeart,
  FaLanguage,
  FaGamepad,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

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
  skills: {
    "React.js": 90,
    JavaScript: 85,
    "HTML/CSS": 95,
    "Node.js": 80,
    "UI/UX Design": 75,
  },
};

const icons = {
  name: <FaUser className="text-indigo-500" />,
  age: <FaCalendarAlt className="text-indigo-500" />,
  dob: <FaCalendarAlt className="text-indigo-500" />,
  nationality: <FaGlobe className="text-indigo-500" />,
  maritalStatus: <FaHeart className="text-indigo-500" />,
  languagesKnown: <FaLanguage className="text-indigo-500" />,
  hobbies: <FaGamepad className="text-indigo-500" />,
};

const Profile = () => {
  const [floatingIndex, setFloatingIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIndex(
        Math.floor(Math.random() * Object.keys(PersonalProfile).length)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl text-gray-800 transform hover:scale-105 transition-transform duration-300"
      >
        {/* Profile Picture & Title */}
        <motion.div className="flex flex-col items-center mb-6">
          <motion.img
            src="profile.jpg" // Updated image URL
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
            whileHover={{ scale: 1.1 }}
          />
          <motion.h2 className="text-4xl font-extrabold text-center mt-4 text-indigo-700 uppercase">
            Personal Profile
          </motion.h2>
          <motion.p className="text-gray-600 text-center mt-2">
            Full Stack Developer | UI/UX Enthusiast
          </motion.p>
        </motion.div>

        {/* Personal Details */}
        <div className="space-y-4">
          {Object.entries(PersonalProfile).map(([key, value], index) => {
            // Skip the "skills" key since it is rendered separately
            if (key === "skills") return null;
            return (
              <motion.div
                key={key}
                className={`flex items-center space-x-3 text-lg border-b pb-3 p-2 rounded-lg transition-all duration-300 ${
                  floatingIndex === index
                    ? "bg-indigo-100 scale-105"
                    : "hover:bg-gray-100"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {icons[key] && icons[key]}
                <span className="font-semibold text-indigo-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>
                <span className="text-gray-700">
                  {Array.isArray(value) ? value.join(", ") : value}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Section */}
        <motion.div className="mt-6">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Skills</h3>
          {Object.entries(PersonalProfile.skills).map(([skill, level]) => (
            <div key={skill} className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{skill}</span>
                <span className="text-gray-700">{level}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-indigo-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div className="mt-6">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">
            Contact Me
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:example@example.com"
            className="text-indigo-500 hover:text-indigo-700"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
