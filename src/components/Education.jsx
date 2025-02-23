import { motion, useInView } from "framer-motion";
import {
  FaDownload,
  FaGraduationCap,
  FaCertificate,
  FaRegLightbulb,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { useRef } from "react";

// Animation configurations

const educationData = [
  {
    degree: "Ph.D (Pursuing) Artificial Intelligence & Robotics",
    year: "-",
    institute: "Rathinam College of Arts and Science",
    board: "-",
    grade: "-",
    status: "Ongoing",
  },
  {
    degree: "M.Sc (Computer Technology)",
    year: "2020",
    institute: "Sri Krishna Arts and Science College, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "N/A",
  },
  {
    degree: "B.Sc (Computer Technology)",
    year: "2018",
    institute: "Kongunadu Arts and Science College, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "78%",
  },
  {
    degree: "H.Sc",
    year: "2015",
    institute: "Chinmaya Vidyalaya Mat Hr Sec School, Coimbatore",
    board: "Bharathiar University, Coimbatore",
    grade: "72%",
  },
  {
    degree: "SSLC",
    year: "2013",
    institute: "Chinmaya Vidyalaya Mat Hr Sec School, Coimbatore",
    board: "-",
    grade: "88%",
  },
];


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

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 ">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-200 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-200 rounded-full blur-xl" />
      </motion.div>

      <div className="container mx-auto relative z-10 px-4" ref={ref}>
        {/* Animated Header with floating effect */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <p className="text-xl text-white">
            My Path to Knowledge and Expertise
          </p>
        </motion.div>

        {/* Enhanced Download Button */}
        <motion.div
          className="flex justify-center mb-20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/path/to/resume.pdf"
            download
            className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 group"
          >
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaDownload className="text-2xl mr-3 group-hover:rotate-45 transition-transform" />
            </motion.div>
            <span className="text-lg font-semibold">
              Download Professional CV
            </span>
          </a>
        </motion.div>

        {/* Enhanced Education Timeline */}
        <motion.div
          className="relative"
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          <div className="absolute left-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full rounded-full shadow-lg" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`relative mb-16 w-full ${
                index % 2 === 0 ? "pr-20" : "pl-20"
              }`}
              custom={index}
            >
              <div
                className={`flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    {index === 0 ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <SiGooglescholar className="text-white text-xl" />
                      </motion.div>
                    ) : (
                      <FaGraduationCap className="text-white text-xl" />
                    )}
                  </motion.div>
                </div>

                {/* Education Card */}
                <motion.div
                  className={`flex-1 p-8 rounded-3xl bg-white shadow-xl ${
                    index % 2 === 0 ? "ml-auto mr-20" : "mr-auto ml-20"
                  }`}
                  variants={cardHover}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-purple-100 rounded-2xl">
                      <FaRegLightbulb className="text-3xl text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Institute:</span>
                      {edu.institute}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Year:</span>
                      {edu.year}
                    </p>
                    {edu.grade !== "-" && (
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Grade:</span>
                        <span className="bg-purple-100 px-3 py-1 rounded-full text-purple-700">
                          {edu.grade}
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Progress Indicator for Ongoing */}
                  {edu.status === "Ongoing" && (
                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-purple-600">
                          Progress
                        </span>
                        <span className="text-sm text-gray-500">60%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      
           
             
          
         
      </div>
    </section>
  );
};

export default Education;
