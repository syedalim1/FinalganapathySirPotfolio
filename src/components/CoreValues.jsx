import { motion } from "framer-motion";
import {
  FaFlag,
  FaEye,
  FaBullseye,
  FaSeedling,
  FaGlobe,
  FaHandsHelping,
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

  return (
    <section className="min-h-screen  py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Motto Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20 text-center"
        >
          <div className="inline-block bg-blue-100 rounded-full p-4 mb-6">
            <FaFlag className="text-4xl text-blue-600" />
          </div>
          <h3 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Our Motto
          </h3>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            "Empowering lives through quality education, fostering discipline
            and global transformation with timeless values."
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="mb-20 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-xl mr-4">
              <FaEye className="text-3xl text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vision
            </h3>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            To empower students with transformative education rooted in quality
            and excellence, enabling them to become global citizens with
            purpose, values, and meaningful contributions to society.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <div className="col-span-2 text-center mb-12">
            <div className="inline-block bg-green-100 rounded-full p-4 mb-6">
              <FaBullseye className="text-4xl text-green-600" />
            </div>
          <h3 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Our Mission
            </h3>
          </div>

          {[
            {
              icon: FaSeedling,
              color: "bg-green-100",
              text: "To inspire students through holistic learning approaches combining modern education with ancient Indian wisdom",
            },
            {
              icon: FaGlobe,
              color: "bg-blue-100",
              text: "To foster creativity, innovation, and global perspectives for a rapidly evolving world",
            },
            {
              icon: FaHandsHelping,
              color: "bg-purple-100",
              text: "To cultivate ethical leaders through virtues of humility, perseverance, and compassion",
            },
            {
              icon: FaBullseye,
              color: "bg-indigo-100",
              text: "To unlock every student's potential for fulfilling and impactful lives",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${item.color} p-4 rounded-xl w-fit mb-4`}>
                <item.icon className="text-3xl text-current" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Decorative Elements */}
        <div className="absolute right-0 top-1/3 -z-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
