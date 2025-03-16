import React, { useState } from "react";
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
  { 
    name: "Machine Learning", 
    icon: <FaRobot />,
    description: "Deep learning, neural networks, and predictive algorithms"
  },
  { 
    name: "Artificial Intelligence", 
    icon: <FaBrain />,
    description: "Cognitive systems and intelligent automation solutions"
  },
  { 
    name: "Natural Language Processing", 
    icon: <FaCode />,
    description: "Text analysis, sentiment analysis, and language understanding"
  },
  { 
    name: "Cloud Computing", 
    icon: <FaCloud />,
    description: "Distributed systems, serverless architecture, and scalable solutions"
  },
  { 
    name: "Data Mining", 
    icon: <FaChartLine />,
    description: "Pattern discovery and insightful data extraction techniques"
  },
  { 
    name: "Networking", 
    icon: <FaNetworkWired />,
    description: "Secure communication protocols and network optimization"
  },
  { 
    name: "Web Designing", 
    icon: <FaPaintBrush />,
    description: "Creative UX/UI design and responsive web experiences"
  },
  { 
    name: "Data Structure", 
    icon: <FaServer />,
    description: "Efficient data organization and algorithmic optimization"
  },
];

const AreaOfInterest = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Floating particles
  const particles = Array(15).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20 bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated glow orbs */}
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
        <div className="absolute w-40 h-40 bg-purple-500 rounded-full blur-3xl top-20 left-20 animate-pulse" />
        <div className="absolute w-64 h-64 bg-pink-500 rounded-full blur-3xl bottom-10 right-20 animate-pulse delay-100" />
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full blur-3xl top-1/2 right-1/3 animate-pulse delay-200" />
        <div className="absolute w-48 h-48 bg-indigo-500 rounded-full blur-3xl bottom-1/3 left-1/4 animate-pulse delay-300" />
      </motion.div>

      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Animated title with enhanced gradient text */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent inline-block"
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
          
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-pink-500 to-yellow-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Grid with enhanced staggered animations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
              className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: 50 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: "spring", bounce: 0.4 },
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: Math.random() * 2 - 1, // Random slight rotation between -1 and 1 degrees
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  background: hoveredIndex === index ? 
                    "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)" :
                    "none"
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Dynamic border glow */}
              <motion.div 
                className="absolute -inset-px rounded-2xl"
                style={{
                  background: `linear-gradient(45deg, transparent, ${hoveredIndex === index ? 'rgba(255,105,180,0.3)' : 'transparent'}, ${hoveredIndex === index ? 'rgba(255,223,0,0.3)' : 'transparent'}, transparent)`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: hoveredIndex === index ? 3 : 0,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Icon with enhanced animation */}
              <motion.div
                className="text-5xl mb-4 text-pink-400 group-hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {interest.icon}
              </motion.div>

              {/* Text with animated gradient */}
              <motion.h3 
                className="text-xl font-semibold mb-2 text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300"
                animate={{
                  backgroundPosition: hoveredIndex === index ? ["0% 50%", "100% 50%"] : "0% 50%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {interest.name}
              </motion.h3>
              
              {/* Description with fade in */}
              <motion.p
                className="text-sm text-gray-300 opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                animate={{ y: hoveredIndex === index ? 0 : 10 }}
                transition={{ duration: 0.3 }}
              >
                {interest.description}
              </motion.p>

              {/* Decorative elements */}
              <div className="absolute -inset-1 rounded-2xl border border-white/10 group-hover:border-yellow-400/30 transition-all duration-500" />
              <div className="absolute -inset-2 rounded-2xl border border-white/5 group-hover:border-pink-400/20 transition-all duration-700" />
              
              {/* Sparkle effects on hover */}
              {hoveredIndex === index && (
                <>
                  <motion.div
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                    initial={{ top: "50%", left: "50%", scale: 0 }}
                    animate={{ 
                      top: ["50%", "10%"], 
                      left: ["50%", "80%"],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className="absolute w-2 h-2 bg-pink-300 rounded-full"
                    initial={{ top: "50%", left: "50%", scale: 0 }}
                    animate={{ 
                      top: ["50%", "80%"], 
                      left: ["50%", "20%"],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced floating scroll indicator */}
        <motion.div
          className="mt-16 text-white/60"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: [0.4, 1, 0.4], 
            y: [-10, 10, -10] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <svg
            className="w-10 h-10 mx-auto"
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