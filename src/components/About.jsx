import { motion, useTransform, useViewportScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallax effect

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center  overflow-hidden"
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
              <span className="font-semibold text-blue-400">Address:</span> 43–
              Venkata Krishna road, R.S Puram, Coimbatore-641002.
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
  );
};

export default About;
