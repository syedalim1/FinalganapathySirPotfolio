import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBook, FaFileAlt, FaGraduationCap, FaSearch, FaQuoteLeft, FaUniversity, FaAward } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiOutlineExperiment } from "react-icons/ai";
import { BsJournals } from "react-icons/bs";

const publications = {
  books: [
    {
      title: "Android Odyssey",
      publisher: "Laser Park Publishing House, Volume 22",
      date: "February 2024",
    },
    {
      title: "Python the Ladder to Next Gen Technologies",
      publisher: "Laser Park Publishing House, Volume 1",
      date: "August 2023",
    },
    {
      title: "Easiest Way to Learn Data Structure and Algorithms",
      publisher: "Laser Park Publishing House, Volume 1",
      date: "June 2023",
    },
  ],
  journals: [
    {
      title:
        "A Comprehensive Study on AI and ML Techniques in Healthcare Diagnostics",
      publisher:
        "International Research Journal of Multidisciplinary Technovation",
      date: "Yet to Publish (In Review)",
    },
    {
      title: "Advancements in AI and Machine Learning for Cancer Diagnosis",
      publisher: "ICTACT Journal on Image and Video Processing",
      date: "February 2025 (Accepted)",
    },
    {
      title: "An Overview of Software Testing Techniques and Strategies",
      publisher: "The Journal of Community Informatics, Vol: 20, 1",
      date: "2024",
    },
    {
      title: "Controlling Use of Alcohol Consumption through Data Analytics",
      publisher: "INDIAN JOURNAL OF NATURAL SCIENCES, Vol 14/Issue 80/Oct/2023",
      date: "2023",
    },
    {
      title:
        "An Analytical Study of Blockchain Technologies And Its Potential Applications",
      publisher:
        "Journal of Data Acquisition and Processing, Vol 38(3) 2023 (Scopus Indexed Journal)",
      date: "2023",
    },
    {
      title:
        "Innovation Development & Environmental Technology of a Highly Accurate Ensemble Model for Real-Time Low-Cost Air Quality Sensor",
      publisher:
        "Computer Integrated Management System, Vol 28, 2022 (Scopus Indexed Journal)",
      date: "2022",
    },
    {
      title:
        "Technological Research on Remote Access VPN and Its Supremacy Over Site to Site VPN",
      publisher:
        "Journal of Fundamental and Comparative Research, 36-vol VIII.NO.IS(XXV1);2022 (UGC PRINTED)",
      date: "2022",
    },
    {
      title:
        "Research On Yield Development Of Banana Based On Medication And Fertilization For Virus Infected Disease Using Data Mining Algorithm",
      publisher:
        "Advancement In Applications Of Microbiology And Bioinformatics, Web of Science",
      date: "2020",
    },
    {
      title:
        "A Research On Crop Yield Estimation Of Banana In Various Soil And Weather Around North Coimbatore Area Using Data Mining Algorithm",
      publisher:
        "TEST ENGINEERING AND MANAGEMENT JOURNALS (Scopus Indexed Journal)",
      date: "2020",
    },
    {
      title: "Tackling Tools On Green Computing",
      publisher:
        "International Journal of Emerging Technologies and Innovative Research (JETIR), Volume 2, Issue 4",
      date: "April 2019",
    },
    {
      title: "Evolution Technique In Wireless Technology",
      publisher:
        "International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), Volume 7, Issue 11",
      date: "November 2018",
    },
    {
      title: "Artificial Intelligence Assessments In Different Applications",
      publisher:
        "National Conference On Intelligent Learning And Computing (NCILC19), Volume-6",
      date: "February 2019",
    },
    {
      title: "Transmitting Crypt Datas",
      publisher:
        "International Conference On Advances In Information Technology And Networking (ICATN19), Volume-6",
      date: "February 2019",
    },
  ],
};

const Publications = () => {
  const [activeTab, setActiveTab] = useState("books");
  const [animated, setAnimated] = useState({});

  // Animation for counting up
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated({
        books: true,
        journals: true,
        scopus: true,
        research: true
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
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
      transition: { type: "spring", stiffness: 100 }
    },
  };

  // Floating particles animation
  const generateParticles = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full ${i % 3 === 0
            ? "bg-blue-400"
            : i % 3 === 1
              ? "bg-purple-400"
              : "bg-pink-400"
          }`}
        style={{
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ));
  };

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-30">
        {generateParticles(15)}
      </div>

      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-56 h-56 bg-pink-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.5 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"
            />
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop- ">
              Publications
            </h2>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.5 }}
              className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-4"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            <FaQuoteLeft className="inline-block mr-2 text-pink-400 opacity-80" />
            Explore my academic journey through publications that contribute to the evolving landscape of technology and research
          </motion.p>
        </motion.div>

        {/* Enhanced Tabs with glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 flex items-center ${activeTab === "books"
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white   shadow-blue-500/30"
                : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              }`}
            onClick={() => setActiveTab("books")}
          >
            <FaBook className={`mr-2 ${activeTab === "books" ? "animate-bounce" : ""}`} />
            Book Publications
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 flex items-center ${activeTab === "journals"
                ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white   shadow-purple-500/30"
                : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              }`}
            onClick={() => setActiveTab("journals")}
          >
            <BsJournals className={`mr-2 ${activeTab === "journals" ? "animate-bounce" : ""}`} />
            Journal Publications
          </motion.button>
        </motion.div>

        {/* Publications List with animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {publications[activeTab].map((pub, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="p-6 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-3xl   hover:shadow-xl transition-all duration-300 overflow-hidden relative"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tl from-blue-100/20 to-purple-100/20"></div>

              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                  >
                    {activeTab === "books" ? (
                      <FaBook className="text-4xl text-gradient-to-r from-blue-600 to-cyan-400" />
                    ) : (
                      <FaFileAlt className="text-4xl text-gradient-to-r from-purple-600 to-pink-400" />
                    )}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                    {pub.title}
                  </h3>
                  <p className="text-gray-700 mt-2 flex items-center">
                    <FaUniversity className="text-purple-500 mr-2" />
                    {pub.publisher}
                  </p>
                  <p className="text-gray-600 mt-1 flex items-center">
                    <span className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mr-2">
                      <AiOutlineExperiment className="text-purple-600" />
                    </span>
                    <span className="font-semibold">Published:</span> {pub.date}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-3 flex items-center text-blue-600 hover:text-purple-600 transition-colors duration-300 text-sm"
                  >
                    <span>Read more</span>
                    <IoIosArrowDroprightCircle className="ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section with counting animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-xl   border-t border-l border-white/50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4"
            >
              <FaBook className="text-4xl text-blue-600" />
            </motion.div>
            <motion.div
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400"
            >
              {animated.books ? "3+" : "0"}
            </motion.div>
            <div className="text-gray-700">Books Published</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-xl   border-t border-l border-white/50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full flex items-center justify-center mb-4"
            >
              <BsJournals className="text-4xl text-purple-600" />
            </motion.div>
            <motion.div
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400"
            >
              {animated.journals ? "13+" : "0"}
            </motion.div>
            <div className="text-gray-700">Journal Papers</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-xl   border-t border-l border-white/50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4"
            >
              <FaAward className="text-4xl text-cyan-600" />
            </motion.div>
            <motion.div
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400"
            >
              {animated.scopus ? "5+" : "0"}
            </motion.div>
            <div className="text-gray-700">Scopus Indexed</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-xl   border-t border-l border-white/50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4"
            >
              <FaSearch className="text-4xl text-pink-600" />
            </motion.div>
            <motion.div
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400"
            >
              {animated.research ? "10+" : "0"}
            </motion.div>
            <div className="text-gray-700">Research Areas</div>
          </motion.div>
        </motion.div>

        {/* CTA Section with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center relative"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-md border border-white/10 shadow-xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center  "
            >
              <FaGraduationCap className="text-3xl text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold mt-6 mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Interested in Collaborating on Research?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join forces with me on cutting-edge research projects and publications. Let's create impactful work together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold   shadow-purple-500/30 transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
