import { motion } from "framer-motion";
import {
  FaFlag,
  FaEye,
  FaBullseye,
  FaSeedling,
  FaGlobe,
  FaHandsHelping,
  FaGraduationCap,
  FaLightbulb,
  FaHeart,
  FaUniversity
} from "react-icons/fa";

const CoreValues = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br  relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
            Our Core Values
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Motto Section with Enhanced Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-24 text-center relative"
        >
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"
            animate={{
              boxShadow: ["0 0 20px rgba(79, 70, 229, 0.2)", "0 0 40px rgba(79, 70, 229, 0.4)", "0 0 20px rgba(79, 70, 229, 0.2)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
            className="inline-block bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full p-6 mb-8 shadow-lg shadow-blue-500/20"
          >
            <FaFlag className="text-5xl text-white" />
          </motion.div>
          <h3 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Our Motto
          </h3>
          <motion.div
            variants={popIn}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto shadow-xl border border-white/20"
          >
            <p className="text-2xl text-white leading-relaxed italic font-medium">
              "Empowering lives through quality education, fostering discipline
              and global transformation with timeless values."
            </p>
          </motion.div>
        </motion.div>

        {/* Vision Section with Enhanced Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideUp}
          className="mb-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-500"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-8">
            <motion.div
              className="bg-gradient-to-br from-purple-400 to-indigo-600 p-5 rounded-2xl shadow-lg shadow-purple-500/20"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            >
              <FaEye className="text-4xl text-white" />
            </motion.div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Vision
            </h3>
          </div>
          <motion.p
            className="text-xl text-white/90 leading-relaxed"
            variants={fadeIn}
          >
            To empower students with transformative education rooted in quality
            and excellence, enabling them to become global citizens with
            purpose, values, and meaningful contributions to society.
          </motion.p>

          {/* Vision Icons Row */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-4 gap-4 mt-10"
          >
            {[
              { icon: FaGraduationCap, label: "Excellence" },
              { icon: FaGlobe, label: "Global Perspective" },
              { icon: FaLightbulb, label: "Innovation" },
              { icon: FaHeart, label: "Compassion" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={popIn}
                className="flex flex-col items-center"
              >
                <div className="bg-white/10 p-4 rounded-full mb-3">
                  <item.icon className="text-2xl text-white" />
                </div>
                <p className="text-sm text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission Section with Enhanced Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="relative"
        >
          <div className="col-span-2 text-center mb-16">
            <motion.div
              className="inline-block bg-gradient-to-br from-green-400 to-emerald-600 rounded-full p-6 mb-8 shadow-lg shadow-green-500/20"
              animate={{
                y: [0, -10, 0],
                boxShadow: ["0 10px 25px rgba(16, 185, 129, 0.3)", "0 20px 35px rgba(16, 185, 129, 0.5)", "0 10px 25px rgba(16, 185, 129, 0.3)"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <FaBullseye className="text-5xl text-white" />
            </motion.div>
            <h3 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Our Mission
            </h3>
          </div>

          <motion.div
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {[
              {
                icon: FaSeedling,
                color: "from-green-400 to-emerald-600",
                bgColor: "from-green-400/10 to-emerald-500/10",
                shadow: "shadow-green-500/20",
                text: "To inspire students through holistic learning approaches combining modern education with ancient Indian wisdom",
              },
              {
                icon: FaGlobe,
                color: "from-blue-400 to-sky-600",
                bgColor: "from-blue-400/10 to-sky-500/10",
                shadow: "shadow-blue-500/20",
                text: "To foster creativity, innovation, and global perspectives for a rapidly evolving world",
              },
              {
                icon: FaHandsHelping,
                color: "from-purple-400 to-indigo-600",
                bgColor: "from-purple-400/10 to-indigo-500/10",
                shadow: "shadow-purple-500/20",
                text: "To cultivate ethical leaders through virtues of humility, perseverance, and compassion",
              },
              {
                icon: FaUniversity,
                color: "from-amber-400 to-orange-600",
                bgColor: "from-amber-400/10 to-orange-500/10",
                shadow: "shadow-amber-500/20",
                text: "To unlock every student's potential for fulfilling and impactful lives",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={popIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                  backgroundColor: "rgba(255, 255, 255, 0.12)"
                }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <motion.div
                  className={`bg-gradient-to-br ${item.color} p-5 rounded-2xl w-fit mb-6 ${item.shadow}`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="text-3xl text-white" />
                </motion.div>
                <div className={`h-1 w-16 mb-6 bg-gradient-to-r ${item.color} rounded-full`} />
                <p className="text-xl text-white/90 leading-relaxed">
                  {item.text}
                </p>
                <motion.div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.bgColor} rounded-2xl opacity-30`}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="mt-24 flex justify-center"
        >
          <div className="h-1 w-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;