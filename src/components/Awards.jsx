import { motion } from "framer-motion";
import {
  FaAward,
  FaCertificate,
  FaRegLightbulb,
  FaRocket,
} from "react-icons/fa";

const Awards = () => {
  // ... (keep your existing awards array)
  const awards = [
    {
      title: "SEED GRANT - Rathinam GPT",
      description:
        "Received <strong>SEED GRANT Amount Rs-50,000</strong> from Rathinam College of Arts and Science for the project proposal entitled <strong>'Rathinam-GPT: Elevating Academic Support with a Customized Large Language Model.'</strong>",
      color: "bg-blue-100",
    },
    {
      title: "SEED GRANT - Blind Stick Innovation",
      description:
        "Received <strong>SEED GRANT Amount Rs-25,000</strong> from Rathinam College of Arts and Science for the project proposal entitled <strong>'Connectivity Unveiled: Guiding Light and Empowering Independence with Bluetooth Enabled Blind Sticks for Visually Impaired Heroes.'</strong>",
      color: "bg-green-100",
    },
    {
      title: "Rotary Club Recognition",
      description:
        "Received an award for <strong>excellent contribution in the field of organizing extension activities</strong> during the academic year 2023-2024 from the <strong>Rotary Club of Coimbatore.</strong>",
      color: "bg-yellow-100",
    },
    {
      title: "AI Coach Certification",
      description:
        "Certified as a <strong>Coach for Artificial Intelligence</strong> from <strong>DELL.</strong>",
      color: "bg-purple-100",
    },
    {
      title: "IBM Professional Certification",
      description:
        "Certified as a <strong>Professional from IBM</strong> for successfully completing projects from IBM.",
      color: "bg-pink-100",
    },
    {
      title: "Best Faculty - Centre of Excellence",
      description:
        "Awarded as <strong>Best Faculty - Centre of Excellence</strong> during <strong>AASAN UTSAV 7.0</strong> from Rathinam College of Arts & Science.",
      color: "bg-indigo-100",
    },
    {
      title: "Best Hackathon Mentor",
      description:
        "Awarded for <strong>Best Faculty Contributions for Hackathon.</strong>",
      color: "bg-red-100",
    },
    {
      title: "Evaluator & Resource Person",
      description:
        "Acted as <strong>Evaluator & Resource Person</strong> for <strong>Socio-Tech Hackathon</strong> at KPR College of Arts, Science, and Research.",
      color: "bg-teal-100",
    },
    {
      title: "Research Article Writing",
      description:
        "Acted as <strong>Resource Person for Research Article Writing</strong> at Kamadenu Arts and Science College.",
      color: "bg-orange-100",
    },
    {
      title: "Design Thinking Workshop",
      description:
        "Acted as <strong>Resource Person</strong> on the topic <strong>'Design Thinking'</strong> at Kongunadu Arts and Science College.",
      color: "bg-cyan-100",
    },
    {
      title: "Best Paper Award",
      description:
        "Received the <strong>Best Paper Award</strong> for the title <strong>'Technology Embedded Education: The Future of Learning'</strong> at a <strong>NAAC Sponsored TWO-DAY NATIONAL CONFERENCE</strong> on <strong>'Best Practices of Research & Innovation in STEAM Higher Education - A Step Forward to Glorify Sustainable Development Goals Through Indian Knowledge System'</strong> organized by <strong>Shrimathi Devkunvar Nanalal Bhatt Vaishnav College for Women.</strong>",
      color: "bg-lime-100",
    },
  ];

  return (
    <section className="relative  py-16 px-6 text-gray-900">
      {/* Animated Background Elements */}
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
        {/* Section Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Honors & Accolades
          </h2>
          <p className="text-xl text-white">
            Recognitions of excellence and innovation
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative p-8 rounded-3xl shadow-lg ${award.color} transition-all duration-300 hover:shadow-xl`}
            >
              {/* Animated Decoration */}
              <motion.div
                className="absolute top-4 right-4 text-4xl opacity-20"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FaCertificate />
              </motion.div>

              {/* Content */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                    <FaAward className="text-2xl text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent"
                    dangerouslySetInnerHTML={{ __html: award.title }}
                  />
                  <div
                    className="prose text-gray-700 space-y-2"
                    dangerouslySetInnerHTML={{ __html: award.description }}
                  />
                </div>
              </div>

              {/* Animated Interaction Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaRocket className="text-4xl text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">11+</div>
            <div className="text-gray-600">Projects Funded</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaAward className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">50+</div>
            <div className="text-gray-600">Total Awards</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaCertificate className="text-4xl text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">15+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaRegLightbulb className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">100+</div>
            <div className="text-gray-600">Innovations</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to Collaborate on Innovative Projects?
          </h3>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
