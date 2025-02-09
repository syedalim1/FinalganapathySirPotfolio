import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import {
  FaCheckCircle,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaBook,
  FaAward,
} from "react-icons/fa";

const rolesAndResponsibilities = [
  { text: "Acting as IIC Innovation Activity Coordinator", icon: <FaRocket /> },
  { text: "Acting as Techno Club Coordinator", icon: <FaUsers /> },
  {
    text: "Department NAAC committee member Rathinam College of Arts and Science",
    icon: <FaChartLine />,
  },
  { text: "Acting as BOS advisory committee member", icon: <FaCogs /> },
  { text: "Part of IIC Innovation Ambassador", icon: <FaLightbulb /> },
  {
    text: "Department IQAC Co-coordinator Rathinam College of Arts and Science",
    icon: <FaBook />,
  },
  { text: "Acting as a resource person in MAXCADD Academy", icon: <FaAward /> },
  { text: "Attended 5 workshops, 24 FDP, 3 seminars", icon: <FaCheckCircle /> },
  {
    text: "Nominated as chairman of the department during PG studies. Played the role as organizing committee head in symposiums in college during UG studies",
    icon: <FaUsers />,
  },
  {
    text: "Nominated as Secretary of the college and organizing committee head during UG",
    icon: <FaRocket />,
  },
  {
    text: "Nominated as School Pupil Leader during Higher Studies. Organized and conducted many events and functions during School Days",
    icon: <FaAward />,
  },
  {
    text: "Member of Chinmaya Yuva Kendra (CHYK). Youth Wing of Chinmaya Mission. It aims to empower youth with the vision, values, and dynamic for all success",
    icon: <FaUsers />,
  },
  {
    text: "Patent submitted on the topic: ULTROSONIC SENSOR BASED AUTOMATIC OBSTACLE DETECTION FOR VEHICLE",
    icon: <FaLightbulb />,
  },
];

const RolesAndResponsibilities = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]); // Parallax effect

  return (
    <section className="relative min-h-screen flex justify-center items-center   p-6 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0  "
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
        className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-2xl p-8 text-white overflow-hidden"
      >
        {/* Glowing border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/10 group-hover:border-indigo-400/50 transition-all duration-500" />
        <div className="absolute -inset-2 rounded-3xl border-2 border-white/5 group-hover:border-pink-400/30 transition-all duration-700" />

        {/* Title with gradient text */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Roles & Responsibilities
        </motion.h2>

        {/* List with staggered animations */}
        <motion.ul
          className="space-y-4"
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
          {rolesAndResponsibilities.map((role, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }} // Random slight rotation on hover
            >
              {/* Icon with animation */}
              <motion.div
                className="text-2xl text-pink-400 group-hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {role.icon}
              </motion.div>
              <span className="text-lg font-medium">{role.text}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Floating scroll indicator */}
        <motion.div
          className="mt-8 text-white/60 animate-bounce text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
      </motion.div>
    </section>
  );
};

export default RolesAndResponsibilities;
