import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
  AnimatePresence,
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
  FaGraduationCap,
  FaBriefcase,
  FaUserTie,
  FaBook,
  FaCode,
  FaAward,
  FaCertificate,
  FaUniversity,
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

// Skills with proficiency levels
const Skills = [
  { name: "Artificial Intelligence", level: 85 },
  { name: "Machine Learning", level: 90 },
  { name: "Natural Language Processing", level: 80 },
  { name: "Cloud Computing", level: 75 },
  { name: "Data Analysis", level: 85 },
  { name: "Teaching", level: 95 },
];

// Education history
const Education = [
  {
    degree: "Ph.D (Pursuing)",
    field: "Computer Science",
    institution: "Anna University",
    year: "2022-Present",
  },
  {
    degree: "M.Sc",
    field: "Computer Science",
    institution: "PSG College of Arts & Science",
    year: "2019-2021",
  },
  {
    degree: "B.Sc",
    field: "Computer Science",
    institution: "Rathinam College of Arts & Science",
    year: "2016-2019",
  },
];

// Publications
const Publications = [
  {
    title: "Machine Learning Approaches for Educational Content Enhancement",
    journal: "Journal of Educational Technology",
    year: "2023",
    link: "#",
  },
  {
    title: "AI Applications in Modern Classroom Environments",
    conference: "International Conference on Educational Technology",
    year: "2022",
    link: "#",
  },
];

// Icons for Profile Section
const icons = {
  name: <FaUser className="text-indigo-500" />,
  age: <FaCalendarAlt className="text-indigo-500" />,
  dob: <FaCalendarAlt className="text-indigo-500" />,
  nationality: <FaGlobe className="text-indigo-500" />,
  maritalStatus: <FaHeart className="text-indigo-500" />,
  languagesKnown: <FaLanguage className="text-indigo-500" />,
  hobbies: <FaGamepad className="text-indigo-500" />,
  fathersName: <FaUserTie className="text-indigo-500" />,
  mothersName: <FaUserTie className="text-indigo-500" />,
  gender: <FaUser className="text-indigo-500" />,
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
  const [activeTab, setActiveTab] = useState("about");
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const theme = isDarkMode ? themes.dark : themes.light;
  const sectionRef = useRef(null);

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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2
    }
  };

  return (
    <div className={`min-h-screen ${theme.primary} ${theme.text} overflow-x-hidden`}>
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

    
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <section id="about" className="py-16">
          <motion.div
            style={{ y }}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10"
          >
            {/* Profile Picture */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${isDarkMode ? "border-indigo-600" : "border-blue-500"
                  } cursor-pointer relative z-10`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsImageEnlarged(!isImageEnlarged)}
                animate={isImageEnlarged ? { scale: 1.5 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./profile.jpg" // Replace with your professional image URL
                  alt="Mr. N. Ganapathiram"
                  className="w-full h-full object-cover"
                />
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 0.7 }}
                />
              </motion.div>

              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 border-4 border-indigo-300/30 rounded-full z-0"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                }}
                style={{ margin: "-10px" }}
              />
              <motion.div
                className="absolute inset-0 border-4 border-purple-300/20 rounded-full z-0"
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                }}
                style={{ margin: "-20px" }}
              />
            </motion.div>

            {/* Hero Content */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div animate={pulseAnimation}>
                <h1 className={`text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r ${isDarkMode ? "from-indigo-400 to-purple-400" : "from-indigo-600 to-purple-600"
                  } text-transparent bg-clip-text`}>
                  N. Ganapathiram
                </h1>
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-500">
                Assistant Professor | Researcher
              </h2>

              <motion.div
                className={`p-4 rounded-lg ${theme.secondary} mb-6 backdrop-blur-sm bg-opacity-70 shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-blue-400">
                    Mr. N. Ganapathiram M.Sc (Ph.D)
                  </span>
          
                , an{" "}
                <span className={`font-semibold ${isDarkMode ? "text-purple-300" : "text-purple-500"}`}>
                  Assistant Professor
                </span>{" "}
                and passionate educator in{" "}
                <span className={`font-semibold ${isDarkMode ? "text-green-300" : "text-green-500"}`}>
                  Computer Science
                </span>
                , with expertise in AI and Machine Learning.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <motion.span
                  className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-indigo-800 text-indigo-200" : "bg-indigo-100 text-indigo-800"} font-medium`}
                  whileHover={{ scale: 1.1 }}
                >
                  Artificial Intelligence
                </motion.span>
                <motion.span
                  className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-purple-800 text-purple-200" : "bg-purple-100 text-purple-800"} font-medium`}
                  whileHover={{ scale: 1.1 }}
                >
                  Machine Learning
                </motion.span>
                <motion.span
                  className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-blue-800 text-blue-200" : "bg-blue-100 text-blue-800"} font-medium`}
                  whileHover={{ scale: 1.1 }}
                >
                  Cloud Computing
                </motion.span>
                <motion.span
                  className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-green-800 text-green-200" : "bg-green-100 text-green-800"} font-medium`}
                  whileHover={{ scale: 1.1 }}
                >
                  Natural Language Processing
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="#contact"
                className={`px-6 py-2 rounded-full ${theme.buttonBg} ${theme.buttonText} font-medium flex items-center gap-2 shadow-lg`}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                onClick={() => {
                  setActiveTab("contact");
                  scrollToSection("contact");
                }}
              >
                <FaEnvelope /> Contact Me
              </motion.a>
              <motion.a
                href="#" // Replace with actual download link
                className={`px-6 py-2 rounded-full border ${isDarkMode ? "border-indigo-500 text-indigo-300" : "border-indigo-500 text-indigo-700"} font-medium flex items-center gap-2`}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaDownload /> Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Details */}
      <motion.section
        className={`p-8 rounded-2xl ${theme.cardBg} shadow-xl mb-16`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={`text-2xl font-bold mb-6 border-b-2 ${isDarkMode ? "border-indigo-600" : "border-indigo-300"} pb-2`}>
          Professional Summary
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-full ${isDarkMode ? "bg-indigo-900" : "bg-indigo-100"} flex items-center justify-center`}>
              <FaBriefcase className={isDarkMode ? "text-indigo-300" : "text-indigo-600"} size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Work Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Teaching Experience:</span> 3.2 years as Assistant Professor at Rathinam College of Arts & Science.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Industry Experience:</span> 1.5 years as Business Development Associate at BYJUS.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-full ${isDarkMode ? "bg-purple-900" : "bg-purple-100"} flex items-center justify-center`}>
              <FaBook className={isDarkMode ? "text-purple-300" : "text-purple-600"} size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Research Interests</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Artificial Intelligence, Machine Learning, Natural Language Processing, and Cloud Computing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-100"} flex items-center justify-center`}>
              <FaGlobe className={isDarkMode ? "text-blue-300" : "text-blue-600"} size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Contact Information</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Address:</span> 43– Venkata Krishna road, R.S Puram, Coimbatore-641002.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:ganapathiram9800@gmail.com"
                  className={`${isDarkMode ? "text-purple-300" : "text-purple-600"} hover:underline`}
                >
                  ganapathiram9800@gmail.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Mobile:</span>{" "}
                <a
                  href="tel:9677400123"
                  className={`${isDarkMode ? "text-green-300" : "text-green-600"} hover:underline`}
                >
                  9677400123
                </a>
                ,{" "}
                <a
                  href="tel:8248935436"
                  className={`${isDarkMode ? "text-green-300" : "text-green-600"} hover:underline`}
                >
                  8248935436
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className={`p-8 rounded-2xl ${theme.cardBg} shadow-xl mb-16`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={`text-2xl font-bold mb-6 border-b-2 ${isDarkMode ? "border-indigo-600" : "border-indigo-300"} pb-2`}>
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className={`w-full h-3 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{ width: "0%" }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className={`p-8 rounded-2xl ${theme.cardBg} shadow-xl mb-16`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={`text-2xl font-bold mb-6 border-b-2 ${isDarkMode ? "border-indigo-600" : "border-indigo-300"} pb-2`}>
          Education
        </h2>

        <div className="space-y-8">
          {Education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-4 border-l-4 ${isDarkMode ? "border-indigo-600 bg-gray-800/50" : "border-indigo-500 bg-gray-50"
                } rounded-r-lg relative`}
            >
              {/* Decorative Timeline Dot */}
              <div
                className={`absolute w-4 h-4 rounded-full ${isDarkMode ? "bg-indigo-600" : "bg-indigo-500"
                  } left-0 top-5 -translate-x-2 shadow-lg`}
              />

              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold">
                    {edu.degree} in {edu.field}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <FaUniversity className={isDarkMode ? "text-indigo-300" : "text-indigo-600"} />
                    <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                  </div>
                </div>
                <div className={`mt-2 md:mt-0 px-3 py-1 rounded-full ${isDarkMode ? "bg-indigo-900/50 text-indigo-300" : "bg-indigo-100 text-indigo-800"
                  } text-sm font-medium`}>
                  {edu.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section
        id="publications"
        className={`p-8 rounded-2xl ${theme.cardBg} shadow-xl mb-16`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={`text-2xl font-bold mb-6 border-b-2 ${isDarkMode ? "border-indigo-600" : "border-indigo-300"} pb-2`}>
          Publications & Research
        </h2>

        <div className="space-y-6">
          {Publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-5 rounded-lg ${isDarkMode ? "bg-gray-800/70" : "bg-gray-50"
                } hover:shadow-lg transition-shadow duration-300`}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-bold mb-2 text-indigo-500">{pub.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {pub.journal ? `Journal: ${pub.journal}` : `Conference: ${pub.conference}`}
              </p>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {pub.year}
                </span>
                <motion.a
                  href={pub.link}
                  className={`text-sm ${isDarkMode ? "text-indigo-300" : "text-indigo-600"} hover:underline flex items-center gap-1`}
                  whileHover={{ x: 3 }}
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.section>

        {/* Personal Details Section */}
        <motion.section
          className={`p-8 rounded-2xl ${theme.cardBg} shadow-xl mb-16`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className={`text-2xl font-bold mb-6 border-b-2 ${isDarkMode ? "border-indigo-600" : "border-indigo-300"} pb-2`}>
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(PersonalProfile).map(([key, value], index) => {
              if (key === "skills") return null;
              return (
                <motion.div
                  key={key}
                  className={`flex items-center gap-3 p-3 ${floatingIndex === index
                      ? isDarkMode ? "bg-indigo-900/50 scale-105" : "bg-indigo-50 scale-105"
                      : ""
                    } rounded-lg transition-all duration-300 hover:${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`p-2 rounded-full ${isDarkMode ? "bg-indigo-900" : "bg-indigo-100"}`}>
                    {icons[key] && React.cloneElement(icons[key], {
                      className: isDarkMode ? "text-indigo-300" : "text-indigo-600"
                    })}
                  </div>
                  <div>
                    <span className={`font-semibold capitalize ${isDarkMode ? "text-indigo-300" : "text-indigo-700"}`}>
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>
                    <span className="ml-2">
                      {Array.isArray(value) ? value.join(", ") : value}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Hobbies & Interests Section with Icons */}
        <motion.section
          className={`p-8 rounded-2xl ${theme.cardBg} shadow-xl mb-16`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className={`text-2xl font-bold mb-6 border-b-2 ${isDarkMode ? "border-indigo-600" : "border-indigo-300"} pb-2`}>
            Hobbies & Interests
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {PersonalProfile.hobbies.map((hobby, index) => (
              <motion.div
                key={hobby}
                className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-50"} flex flex-col items-center justify-center text-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className={`w-12 h-12 rounded-full ${isDarkMode ? "bg-indigo-900" : "bg-indigo-100"} flex items-center justify-center mb-2`}>
                  {/* Using generic icon for simplicity, but could be customized for each hobby */}
                  {hobby === "Playing" ? (
                    <FaGamepad className={isDarkMode ? "text-indigo-300" : "text-indigo-600"} size={20} />
                  ) : hobby === "Travelling" ? (
                    <FaGlobe className={isDarkMode ? "text-indigo-300" : "text-indigo-600"} size={20} />
                  ) : hobby === "Cricket" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                      <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14.4L9.6 13L14.4 8.2L15.8 9.6L11 14.4M7.5 20.2L5.5 18L6.9 16.6L8.9 18.8L7.5 20.2M6.4 12.7L4.1 10.4L5.5 9L7.8 11.3L6.4 12.7M9 9.4L7.6 8L9.9 5.7L11.3 7.1L9 9.4M12.7 6.4L10.4 4.1L11.8 2.7L14.1 5L12.7 6.4M18 18.9L16.6 20.3L14.3 18L15.7 16.6L18 18.9M19.5 12.9L18.1 14.3L15.8 12L17.2 10.6L19.5 12.9Z" />
                    </svg>
                  ) : hobby === "Volunteering" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                      <path fill="currentColor" d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" />
                    </svg>
                  ) : hobby === "Cooking" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                      <path fill="currentColor" d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z" />
                    </svg>
                  ) : hobby === "Gardening" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                      <path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                    </svg>
                  ) : hobby === "Listening to Music" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                      <path fill="currentColor" d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" />
                    </svg>
                  ) : (
                    <FaGamepad className={isDarkMode ? "text-indigo-300" : "text-indigo-600"} size={20} />
                  )}
                </div>
                <p className="font-medium">{hobby}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className={`p-8 rounded-2xl ${theme.cardBg} shadow-xl mb-16`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className={`text-2xl font-bold mb-6 border-b-2 ${isDarkMode ? "border-indigo-600" : "border-indigo-300"} pb-2`}>
            Contact Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className={`px-6 py-3 rounded-lg ${theme.buttonBg} ${theme.buttonText} font-medium w-full`}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            <div className="md:w-1/2 space-y-6">
              <motion.div
                className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-50"} flex items-start gap-4`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-3 rounded-full ${isDarkMode ? "bg-indigo-900" : "bg-indigo-100"} flex items-center justify-center`}>
             
                    < FaEnvelope className={isDarkMode ? "text-indigo-300" : "text-indigo-600"} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:ganapathiram9800@gmail.com"
                    className={`${isDarkMode ? "text-purple-300" : "text-purple-600"} hover:underline`}
                  >
                    ganapathiram9800@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-50"} flex items-start gap-4`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-3 rounded-full ${isDarkMode ? "bg-indigo-900" : "bg-indigo-100"} flex items-center justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                    <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <div>
                    <a
                      href="tel:9677400123"
                      className={`${isDarkMode ? "text-green-300" : "text-green-600"} hover:underline block`}
                    >
                      +91 9677400123
                    </a>
                    <a
                      href="tel:8248935436"
                      className={`${isDarkMode ? "text-green-300" : "text-green-600"} hover:underline`}
                    >
                      +91 8248935436
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-50"} flex items-start gap-4`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-3 rounded-full ${isDarkMode ? "bg-indigo-900" : "bg-indigo-100"} flex items-center justify-center`}>
                  <FaGlobe className={isDarkMode ? "text-indigo-300" : "text-indigo-600"} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p>43– Venkata Krishna road,</p>
                  <p>R.S Puram, Coimbatore-641002</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Social Media & Download Section */}
        <motion.section
          className={`p-8 rounded-2xl ${theme.cardBg} shadow-xl mb-16 text-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

          <motion.div
            className="flex justify-center space-x-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} text-indigo-500 hover:text-indigo-700`}
              whileHover={{
                scale: 1.2,
                backgroundColor: isDarkMode ? "rgb(79, 70, 229)" : "rgb(99, 102, 241)",
                color: "white",
                rotate: [0, -10, 10, -10, 0],
              }}
              variants={itemVariants}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} text-indigo-500 hover:text-indigo-700`}
              whileHover={{
                scale: 1.2,
                backgroundColor: isDarkMode ? "rgb(79, 70, 229)" : "rgb(99, 102, 241)",
                color: "white",
                rotate: [0, -10, 10, -10, 0],
              }}
              variants={itemVariants}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:ganapathiram9800@gmail.com"
              className={`p-4 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} text-indigo-500 hover:text-indigo-700`}
              whileHover={{
                scale: 1.2,
                backgroundColor: isDarkMode ? "rgb(79, 70, 229)" : "rgb(99, 102, 241)",
                color: "white",
                rotate: [0, -10, 10, -10, 0],
              }}
              variants={itemVariants}
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.a
            href="#"
            className={`inline-flex items-center px-6 py-3 rounded-full ${theme.buttonBg} ${theme.buttonText} font-medium gap-2`}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            <FaDownload /> Download CV
          </motion.a>
        </motion.section>
      </div>

   
      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full ${isDarkMode ? "bg-indigo-600" : "bg-indigo-500"} text-white shadow-lg z-50`}
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