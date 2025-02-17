import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaBriefcase,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const Experience = () => {
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
      color: "bg-blue-50",
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
      color: "bg-purple-50",
    },
  ];

  return (
    <section className="relative f py-16 px-6">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-30"
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-purple-100 rounded-full blur-xl opacity-30"
        animate={{ y: [0, -100, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-white">
            Combining academia and industry expertise for impactful innovation
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-8 rounded-3xl shadow-lg ${exp.color} hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">{exp.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-700 mt-2">{exp.role}</p>
                  <p className="text-gray-600 mt-1">
                    <span className="font-semibold">Duration:</span>{" "}
                    {exp.duration}
                  </p>
                  {exp.startDate && (
                    <p className="text-gray-600">
                      <span className="font-semibold">Started:</span>{" "}
                      {exp.startDate}
                    </p>
                  )}
                  <div className="mt-4 space-y-2">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaChalkboardTeacher className="text-4xl text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">4.7+</div>
            <div className="text-gray-600">Years in Teaching</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaBriefcase className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">1.5+</div>
            <div className="text-gray-600">Years in Industry</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaLightbulb className="text-4xl text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">10+</div>
            <div className="text-gray-600">Projects Led</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">100+</div>
            <div className="text-gray-600">Students Mentored</div>
          </div>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Collaborate or Learn Together?
          </h3>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
            Connect with Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
