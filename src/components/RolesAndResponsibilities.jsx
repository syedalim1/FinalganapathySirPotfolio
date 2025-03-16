import React, { useState } from "react";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
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
  const [selectedRole, setSelectedRole] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]); // Enhanced parallax effect

  // Generate random positions for floating elements
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 10,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    color: [
      "bg-purple-500",
      "bg-pink-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-cyan-400",
      "bg-teal-400",
    ][Math.floor(Math.random() * 6)],
  }));

  return (
    <section className="relative min-h-screen flex justify-center items-center p-6 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className={`absolute rounded-full blur-xl opacity-30 ${el.color}`}
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: `${el.size}px`,
              height: `${el.size}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Parallax stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      {/* Waves animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
        style={{ y }}
      >
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <motion.path
            fill="rgba(168, 85, 247, 0.4)"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,165.3C960,171,1056,213,1152,202.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
          />
          <motion.path
            fill="rgba(99, 102, 241, 0.4)"
            d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,117.3C672,107,768,149,864,186.7C960,224,1056,256,1152,245.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,117.3C672,107,768,149,864,186.7C960,224,1056,256,1152,245.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,154.7C672,139,768,149,864,170.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,117.3C672,107,768,149,864,186.7C960,224,1056,256,1152,245.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </motion.div>

      {/* Main content container with glass morphism */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-4xl p-8 text-white overflow-hidden border border-white/20"
      >
        {/* Glowing borders */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/10 opacity-50" />
        <div className="absolute -inset-2 rounded-3xl border-2 border-white/5 opacity-30" />
        <div className="absolute inset-x-0 -bottom-2 h-40 bg-gradient-to-t from-purple-600/20 to-transparent rounded-b-3xl" />

        {/* Title with enhanced animation */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h2
            className="text-5xl font-extrabold uppercase relative z-10 inline-block"
            animate={{
              textShadow: ["0 0 8px rgba(255,255,255,0.4)", "0 0 16px rgba(255,255,255,0.6)", "0 0 8px rgba(255,255,255,0.4)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Roles & Responsibilities
            </span>
          </motion.h2>

          {/* Decorative underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full w-48 mx-auto mt-3"
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>

        {/* Enhanced list with interactive animations */}
        <motion.ul
          className="space-y-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.6,
              },
            },
          }}
        >
          {rolesAndResponsibilities.map((role, index) => (
            <motion.li
              key={index}
              className="relative"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              onClick={() => setSelectedRole(selectedRole === index ? null : index)}
            >
              <motion.div
                className={`flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer relative z-10 overflow-hidden ${selectedRole === index ? "bg-white/20 ring-2 ring-indigo-400" : ""
                  }`}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
                }}
                layout
              >
                {/* Background glow effect */}
              


                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 transition-opacity duration-300" />
                
                {/* Icon with enhanced animation */}
                <motion.div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    selectedRole === index 
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white" 
                      : "bg-white/10 text-pink-400"
                  } transition-colors duration-500 mr-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">{role.icon}</span>
                </motion.div>
                
                <span className="text-lg font-medium flex-1">{role.text}</span>
                
                {/* Expanding details indicator */}
                <motion.div 
                  className="w-6 h-6 flex items-center justify-center"
                  animate={{ rotate: selectedRole === index ? 180 : 0 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-4 h-4 opacity-70"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Expandable details panel */}
              <AnimatePresence>
                {selectedRole === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 backdrop-blur-sm rounded-b-xl p-4 border-t border-white/10 mt-1"
                  >
                    <p className="text-white/80">
                      Additional details about this role and responsibility would go here. 
                      Click again to collapse this section.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>

        {/* Enhanced floating scroll indicator */}
        <motion.div
          className="mt-8 text-white/80 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg
              className="w-5 h-5"
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
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-3xl" />
      </motion.div>
    </section>
  );
};

export default RolesAndResponsibilities;