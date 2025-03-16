import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaBriefcase,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaMedal,
  FaStar,
} from "react-icons/fa";
import { useState } from "react";

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
      title: "Rathinam College of Arts & Science",
      role: "Assistant Professor, Department of Computer Science - Centre of Excellence",
      duration: "3.2 years",
      startDate: "22/11/2021",
      highlights: [
        "Mentored 100+ students in AI and Robotics",
        "Led 5+ research projects",
        "Organized 10+ workshops and hackathons",
      ],
      color: "bg-gradient-to-r from-blue-50 to-blue-100",
      borderColor: "border-blue-300",
      iconBg: "bg-blue-100",
    },
    {
      icon: <FaBriefcase className="text-4xl text-purple-600" />,
      title: "BYJUS",
      role: "Business Development Associate",
      duration: "1.5 years",
      highlights: [
        "Achieved 150% of sales targets consistently",
        "Trained and onboarded 20+ new team members",
        "Developed innovative sales strategies",
      ],
      color: "bg-gradient-to-r from-purple-50 to-purple-100",
      borderColor: "border-purple-300",
      iconBg: "bg-purple-100",
    },
  ];

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
  };

  // Staggered animation for experience cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-16 px-6 overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay opacity-20"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)`,
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Animated Floating Shapes */}
      <motion.div
        className="absolute left-10 top-20 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute right-20 bottom-40 w-40 h-40 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 opacity-20 blur-xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 },
        }}
      />
      <motion.div
        className="absolute left-1/3 bottom-20 w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600 opacity-20 blur-xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 },
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            Professional Journey
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Combining academia and industry expertise for impactful innovation
          </motion.p>
        </motion.div>

        {/* Experience Timeline - Enhanced with Staggered Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-6 rounded-3xl shadow-xl ${exp.color} border-2 ${exp.borderColor} backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
            >
              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-gradient-to-br from-white to-transparent opacity-10" />
              <div className="absolute -left-4 -bottom-4 w-32 h-32 rounded-full bg-gradient-to-tl from-white to-transparent opacity-10" />

              <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                {/* Icon with enhanced styling */}
                <motion.div
                  className={`flex-shrink-0 p-4 rounded-2xl ${exp.iconBg} shadow-lg border border-white border-opacity-20 flex items-center justify-center`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {exp.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    {exp.title}
                    {hoveredIndex === index && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="ml-2"
                      >
                        <FaStar className="text-yellow-400" />
                      </motion.span>
                    )}
                  </h3>
                  <p className="text-lg text-gray-700 mt-2 font-medium">{exp.role}</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <p className="text-gray-600 bg-white bg-opacity-50 rounded-full px-3 py-1 text-sm flex items-center">
                      <FaRocket className="mr-1 text-blue-500" /> {exp.duration}
                    </p>
                    {exp.startDate && (
                      <p className="text-gray-600 bg-white bg-opacity-50 rounded-full px-3 py-1 text-sm flex items-center">
                        <FaLightbulb className="mr-1 text-yellow-500" /> Started: {exp.startDate}
                      </p>
                    )}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="mt-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <FaMedal className="text-purple-600" /> Key Highlights:
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                          className="flex items-start"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2" />
                          <span className="text-gray-700">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section - Reimplemented and Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { icon: <FaChalkboardTeacher />, value: "4.7+", label: "Years in Teaching", color: "from-blue-400 to-blue-600" },
            { icon: <FaBriefcase />, value: "1.5+", label: "Years in Industry", color: "from-purple-400 to-purple-600" },
            { icon: <FaLightbulb />, value: "10+", label: "Projects Led", color: "from-yellow-400 to-orange-500" },
            { icon: <FaUsers />, value: "100+", label: "Students Mentored", color: "from-pink-400 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-lg border border-white border-opacity-20"
            >
              <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mx-auto mb-4`}>
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                  className="text-3xl"
                >
                  {stat.icon}
                </motion.div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, delay: index * 0.1 + 0.3 }}
                className="text-3xl font-bold text-violet-800"
              >
                {stat.value}
              </motion.div>
              <div className="text-violet-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-white mb-6"
          >
            Ready to Collaborate or Learn Together?
          </motion.h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 border-2 border-white border-opacity-20"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="inline-flex items-center"
            >
              Connect with Me
              <FaRocket className="ml-2" />
            </motion.span>
          </motion.button>

          {/* Animated ring around the button */}
          <div className="relative mt-6 mx-auto w-48 h-5 opacity-70">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;