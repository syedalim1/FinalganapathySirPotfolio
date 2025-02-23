import React, { useEffect, useState } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
} from "framer-motion";
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
  FaDownload,
  FaSun,
  FaMoon,
} from "react-icons/fa";

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

// Icons for Profile Section
const icons = {
  name: <FaUser className="text-indigo-500" />,
  age: <FaCalendarAlt className="text-indigo-500" />,
  dob: <FaCalendarAlt className="text-indigo-500" />,
  nationality: <FaGlobe className="text-indigo-500" />,
  maritalStatus: <FaHeart className="text-indigo-500" />,
  languagesKnown: <FaLanguage className="text-indigo-500" />,
  hobbies: <FaGamepad className="text-indigo-500" />,
};

const App = () => {
  const [floatingIndex, setFloatingIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallax effect

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
    <div className="flex justify-center items-center min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`p-8 rounded-3xl shadow-2xl w-full max-w-4xl transform hover:scale-105 transition-transform duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Profile Picture & Title */}
        <motion.div className="flex flex-col items-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out relative"
          >
            <img
              src="./profile.jpg" // Replace with your professional image URL
              alt="Mr. N. Ganapathiram"
              className="w-full h-full object-cover"
            />
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <motion.h2
            className="text-4xl font-extrabold text-center mt-4 text-indigo-700 uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
         
        </motion.div>

        {/* About Details */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-blue-400">
              Mr. N. Ganapathiram M.Sc (Ph.D)
            </span>
            , an{" "}
            <span className="text-purple-400">
              <br />
              Assistant Professor
            </span>{" "}
            and passionate educator in
            <span className="text-green-400"> Computer Science</span>.
          </p>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-400">Address:</span> 43–
              Venkata Krishna road, R.S Puram, Coimbatore-641002.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-400">Email:</span>
              <a
                href="mailto:ganapathiram9800@gmail.com"
                className="text-purple-400 hover:underline"
              >
                ganapathiram9800@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-400">Mobile:</span>
              <a
                href="tel:9677400123"
                className="text-green-400 hover:underline"
              >
                9677400123
              </a>
              ,
              <a
                href="tel:8248935436"
                className="text-green-400 hover:underline"
              >
                8248935436
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-400">
                Teaching Experience:
              </span>{" "}
              3.2 years as Assistant Professor at Rathinam College of Arts &
              Science.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-400">
                Industry Experience:
              </span>{" "}
              1.5 years as Business Development Associate at BYJUS.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-400">
                Research Interests:
              </span>{" "}
              Artificial Intelligence, Machine Learning, Natural Language
              Processing, and Cloud Computing.
            </p>
          </div>
        </motion.div>

        {/* Personal Details */}
        <div className="space-y-4">
          {Object.entries(PersonalProfile).map(([key, value], index) => {
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

export default App;
