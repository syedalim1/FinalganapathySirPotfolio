import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaDownload,
  FaGraduationCap,
  FaCertificate,
  FaRegLightbulb,
  FaUniversity,
  FaCalendarAlt,
  FaMedal,
  FaChalkboardTeacher
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { useRef, useState } from "react";

// Animation configurations
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardHover = {
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { type: "spring", stiffness: 300 },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const educationData = [
  {
    degree: "Ph.D (Pursuing) Artificial Intelligence & Robotics",
    year: "-",
    institute: "Rathinam College of Arts and Science",
    board: "-",
    grade: "-",
    status: "Ongoing",
    description: "Focused on advanced machine learning algorithms and robotic systems integration.",
    achievements: ["Research publication in progress", "AI Conference presenter"],
    icon: <SiGooglescholar className="text-white text-xl" />,
    color: "from-blue-600 to-purple-600"
  },
  {
    degree: "M.Sc (Computer Technology)",
    year: "2020",
    institute: "Sri Krishna Arts and Science College, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "N/A",
    description: "Specialized in advanced computing technologies and system architecture.",
    achievements: ["Cloud computing project winner", "Department representative"],
    icon: <FaChalkboardTeacher className="text-white text-xl" />,
    color: "from-cyan-500 to-blue-500"
  },
  {
    degree: "B.Sc (Computer Technology)",
    year: "2018",
    institute: "Kongunadu Arts and Science College, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "78%",
    description: "Focused on fundamentals of computer science and software development.",
    achievements: ["Best project award", "Technical event coordinator"],
    icon: <FaGraduationCap className="text-white text-xl" />,
    color: "from-green-500 to-teal-500"
  },
  {
    degree: "H.Sc",
    year: "2015",
    institute: "Chinmaya Vidyalaya Mat Hr Sec School, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "72%",
    description: "Science stream with computer applications as specialization.",
    icon: <FaCertificate className="text-white text-xl" />,
    color: "from-yellow-500 to-orange-500"
  },
  {
    degree: "SSLC",
    year: "2013",
    institute: "Chinmaya Vidyalaya Mat Hr Sec School, Coimbatore",
    board: "-",
    grade: "88%",
    description: "Foundational education with distinction in mathematics.",
    icon: <FaMedal className="text-white text-xl" />,
    color: "from-red-500 to-pink-500"
  },
];

const Education = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      className="relative py-20 overflow-hidden "
      ref={containerRef}
    >
      {/* Dynamic animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10 px-4" ref={ref}>
        {/* Animated Header with enhanced floating effect */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="inline-block"
          >
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Academic Journey
            </h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-200 mb-8">
              My path to knowledge, expertise, and professional growth through years of academic excellence and continuous learning
            </p>
            <motion.div
              className="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
              animate={{ width: ["0%", "100%", "50%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </motion.div>

        {/* Enhanced Download Button with particle effects */}
        <motion.div
          className="flex justify-center mb-20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/path/to/resume.pdf"
            download
            className="relative overflow-hidden flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl hover:shadow-xl transition-all duration-300 group"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 flex justify-center items-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-white opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            <motion.div
              animate={{ y: [-2, 2, -2], rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-4 relative z-10"
            >
              <FaDownload className="text-3xl group-hover:rotate-12 transition-transform" />
            </motion.div>
            <span className="text-xl font-bold relative z-10">
              Download Professional CV
            </span>

            {/* Animated border */}
            <motion.div
              className="absolute -inset-1 rounded-xl opacity-70"
              animate={{
                background: [
                  "linear-gradient(90deg, #4f46e5, #ec4899, #4f46e5)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: "linear-gradient(90deg, #4f46e5, #ec4899, #4f46e5)",
                backgroundSize: "200% 100%",
                filter: "blur(3px)",
                zIndex: 0
              }}
            />
          </a>
        </motion.div>

        {/* Enhanced Education Timeline */}
        <motion.div
          className="relative"
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          <div className="absolute left-1/2 w-2 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 h-full rounded-full shadow-lg">
            {/* Animated pulsing light effect */}
            <motion.div
              className="absolute w-4 h-4 bg-white rounded-full -left-1"
              animate={{
                top: ["0%", "100%"],
                boxShadow: [
                  "0 0 5px 2px rgba(255,255,255,0.3)",
                  "0 0 10px 5px rgba(255,255,255,0.5)",
                  "0 0 5px 2px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`relative mb-20 w-full ${index % 2 === 0 ? "pr-20 lg:pr-0 lg:pl-0" : "pl-20 lg:pl-0 lg:pr-0"
                } lg:px-4`}
              custom={index}
            >
              <div
                className={`flex ${index % 2 === 0 ? "lg:flex-row flex-row" : "lg:flex-row-reverse flex-row-reverse"
                  } items-center flex-col lg:flex-row`}
              >
                {/* Timeline Dot with custom color */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255,255,255,0.3)",
                        "0 0 0 10px rgba(255,255,255,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {edu.icon}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Education Card with enhanced design */}
                <motion.div
                  className={`flex-1 p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl ${index % 2 === 0
                    ? "ml-auto mr-20 lg:mr-20 lg:ml-auto"
                    : "mr-auto ml-20 lg:ml-20 lg:mr-auto"
                    }`}
                  variants={cardHover}
                  whileHover="hover"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                >
                  <div className="relative overflow-hidden">
                    {/* Glow effect when hovered */}
                    {activeCard === index && (
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} blur-xl`} />
                      </motion.div>
                    )}

                    {/* Education heading with icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 bg-gradient-to-br ${edu.color} rounded-2xl shadow-lg`}>
                        <FaRegLightbulb className="text-3xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center mt-2">
                          <FaCalendarAlt className="text-gray-300 mr-2" />
                          <span className="text-gray-300">{edu.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Education details with icons */}
                    <div className="space-y-4 text-gray-300">
                      <p className="flex items-start gap-3">
                        <FaUniversity className="text-lg mt-1 text-gray-300" />
                        <span>
                          <span className="font-semibold text-white">Institute:</span><br />
                          {edu.institute}
                        </span>
                      </p>

                      {edu.description && (
                        <p className="flex items-start gap-3">


                          <FaRegLightbulb className="text-lg mt-1 text-gray-300" />
                          <span>
                            <span className="font-semibold text-white">Focus:</span><br />
                            {edu.description}
                          </span>
                        </p>
                      )}

                      {edu.grade !== "-" && (
                        <p className="flex items-start gap-3">
                          <FaMedal className="text-lg mt-1 text-gray-300" />
                          <span>
                            <span className="font-semibold text-white">Grade:</span><br />
                            <span className={`bg-gradient-to-r ${edu.color} px-4 py-1 rounded-full text-white inline-block mt-1`}>
                              {edu.grade}
                            </span>
                          </span>
                        </p>
                      )}
                    </div>

                    {/* Achievements section */}
                    {edu.achievements && (
                      <motion.div
                        className="mt-6 pt-6 border-t border-white/10"
                        initial={{ opacity: 0, height: 0 }}
                        animate={activeCard === index ?
                          { opacity: 1, height: 'auto' } :
                          { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.4 }}
                      >
                        <h4 className="font-semibold text-white mb-3">Achievements:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center gap-2 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Progress Indicator for Ongoing */}
                    {edu.status === "Ongoing" && (
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-purple-300">
                            Research Progress
                          </span>
                          <span className="text-sm text-gray-300">60%</span>
                        </div>
                        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${edu.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>

                        {/* Pulsing indicator */}
                        <div className="flex items-center mt-4">
                          <motion.div
                            className="w-3 h-3 rounded-full bg-green-500 mr-2"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [1, 0.7, 1],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-green-300 text-sm">Currently in progress</span>
                        </div>
                      </div>
                    )}

                    {/* View Details Button appearing on hover */}
                    <motion.button
                      className={`mt-6 px-4 py-2 rounded-lg bg-gradient-to-r ${edu.color} text-white font-medium flex items-center justify-center gap-2 w-full`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeCard === index ?
                        { opacity: 1, y: 0 } :
                        { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Certificate
                      <FaCertificate />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills acquired section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
            Skills Acquired Through Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Artificial Intelligence", level: 90, color: "from-blue-500 to-purple-500" },
              { name: "Machine Learning", level: 85, color: "from-purple-500 to-pink-500" },
              { name: "Robotics", level: 75, color: "from-red-500 to-orange-500" },
              { name: "Data Science", level: 82, color: "from-green-500 to-teal-500" },
              { name: "Cloud Computing", level: 78, color: "from-cyan-500 to-blue-500" },
              { name: "Web Development", level: 88, color: "from-yellow-500 to-orange-500" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden relative"
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
              >
                <div className="absolute -right-5 -top-5 w-20 h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-xl" />

                <h4 className="text-xl font-bold text-white mb-4">{skill.name}</h4>

                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white/10 text-gray-200">
                        Proficiency
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-200">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education statistics with animated counters */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { label: "Years in Education", value: 12, icon: <FaCalendarAlt className="text-3xl" />, color: "from-blue-500 to-cyan-500" },
            { label: "Degrees Earned", value: 3, icon: <FaCertificate className="text-3xl" />, color: "from-purple-500 to-pink-500" },
            { label: "Research Papers", value: 5, icon: <SiGooglescholar className="text-3xl" />, color: "from-red-500 to-orange-500" },
            { label: "Academic Projects", value: 24, icon: <FaRegLightbulb className="text-3xl" />, color: "from-green-500 to-emerald-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.icon}
              </motion.div>

              <motion.span
                className="text-4xl font-bold text-white block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                {stat.value}
              </motion.span>

              <span className="text-gray-300 mt-2">{stat.label}</span>

              <motion.div
                className={`h-1 w-12 bg-gradient-to-r ${stat.color} mt-4 rounded-full`}
                initial={{ width: 0 }}
                animate={isInView ? { width: "3rem" } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating call-to-action */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl max-w-3xl w-full text-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Background animations */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-white opacity-10 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Ready to collaborate on innovative projects?</h3>
            <p className="text-gray-200 mb-6 relative z-10">Let's connect and discuss how my academic background can contribute to your vision</p>

            <motion.button
              className="px-8 py-3 bg-white text-purple-600 rounded-xl font-bold text-lg relative z-10 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;