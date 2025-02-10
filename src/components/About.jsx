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
  skills: {
    "React.js": 90,
    JavaScript: 85,
    "HTML/CSS": 95,
    "Node.js": 80,
    "UI/UX Design": 75,
  },
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={
        isDarkMode ? "bg-gray-900 text-white" : " text-gray-800"
      }
    >
      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 from-indigo-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-lg"
        />

        {/* Animated floating particles */}
        <motion.div
          className="absolute inset-0 opacity-50"
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

        {/* Main content container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-5xl mx-4 p-8 text-white flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
        >
          {/* Glowing border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-white/10 group-hover:border-indigo-400/50 transition-all duration-500" />
          <div className="absolute -inset-2 rounded-3xl border-2 border-white/5 group-hover:border-pink-400/30 transition-all duration-700" />

          {/* About Details */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-200 mb-4">
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
              <p className="text-gray-200">
                <span className="font-semibold text-blue-400">Address:</span>{" "}
                43– Venkata Krishna road, R.S Puram, Coimbatore-641002.
              </p>
              <p className="text-gray-200">
                <span className="font-semibold text-blue-400">Email:</span>
                <a
                  href="mailto:ganapathiram9800@gmail.com"
                  className="text-purple-400 hover:underline"
                >
                  ganapathiram9800@gmail.com
                </a>
              </p>
              <p className="text-gray-200">
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
              <p className="text-gray-200">
                <span className="font-semibold text-blue-400">
                  Teaching Experience:
                </span>{" "}
                3.2 years as Assistant Professor at Rathinam College of Arts &
                Science.
              </p>
              <p className="text-gray-200">
                <span className="font-semibold text-blue-400">
                  Industry Experience:
                </span>{" "}
                1.5 years as Business Development Associate at BYJUS.
              </p>
              <p className="text-gray-200">
                <span className="font-semibold text-blue-400">
                  Research Interests:
                </span>{" "}
                Artificial Intelligence, Machine Learning, Natural Language
                Processing, and Cloud Computing.
              </p>
            </div>
          </motion.div>

          {/* Profile Image */}
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
        </motion.div>
      </motion.section>

      {/* Profile Section */}
      <div className="flex justify-center items-center min-h-screen p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`p-8 rounded-3xl shadow-2xl w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
         

          {/* Profile Picture & Title */}
          <motion.div className="flex flex-col items-center mb-6">
           
            <motion.h2
              className="text-4xl font-extrabold text-center mt-4 text-indigo-700 uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Personal Profile
            </motion.h2>
            <motion.p
              className="text-gray-600 text-center mt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer | UI/UX Enthusiast
            </motion.p>
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

          {/* Download Resume Button */}
          <motion.div className="mt-6 flex justify-center">
            <button
              className="flex items-center bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
              onClick={() => alert("Downloading resume...")}
            >
              <FaDownload className="mr-2" /> Download Resume
            </button>
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
    </div>
  );
};

export default App;
