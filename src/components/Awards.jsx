import { motion } from "framer-motion";
import {
  FaAward,
  FaCertificate,
  FaRegLightbulb,
  FaRocket,
  FaStar,
  FaTrophy,
  FaMedal,
  FaCrown
} from "react-icons/fa";

const Awards = () => {
  const awards = [
    {
      title: "SEED GRANT - Rathinam GPT",
      description:
        "Received <strong>SEED GRANT Amount Rs-50,000</strong> from Rathinam College of Arts and Science for the project proposal entitled <strong>'Rathinam-GPT: Elevating Academic Support with a Customized Large Language Model.'</strong>",
      color: "bg-blue-100",
      icon: <FaRocket className="text-blue-600" />,
      logo: "https://th.bing.com/th/id/OIP.WPOOn94VxQg5G8YjVATGkgHaGf?rs=1&pid=ImgDetMain",
    },
    {
      title: "SEED GRANT - Blind Stick Innovation",
      description:
        "Received <strong>SEED GRANT Amount Rs-25,000</strong> from Rathinam College of Arts and Science for the project proposal entitled <strong>'Connectivity Unveiled: Guiding Light and Empowering Independence with Bluetooth Enabled Blind Sticks for Visually Impaired Heroes.'</strong>",
      color: "bg-green-100",
      icon: <FaRegLightbulb className="text-green-600" />,
      logo: "https://www.shareicon.net/data/2015/09/22/644653_help_512x512.png",
    },
    {
      title: "Rotary Club Recognition",
      description:
        "Received an award for <strong>excellent contribution in the field of organizing extension activities</strong> during the academic year 2023-2024 from the <strong>Rotary Club of Coimbatore.</strong>",
      color: "bg-yellow-100",
      icon: <FaTrophy className="text-yellow-600" />,
      logo: "https://th.bing.com/th/id/OIP.qVaG90SqSNkI7aRngG-lpAHaHk?rs=1&pid=ImgDetMain",
    },
    {
      title: "AI Coach Certification",
      description:
        "Certified as a <strong>Coach for Artificial Intelligence</strong> from <strong>DELL.</strong>",
      color: "bg-purple-100",
      icon: <FaCertificate className="text-purple-600" />,
      logo: "https://th.bing.com/th/id/OIP.9U7-qz9s5IGEBhuGabzupQAAAA?rs=1&pid=ImgDetMain",
    },
    {
      title: "IBM Professional Certification",
      description:
        "Certified as a <strong>Professional from IBM</strong> for successfully completing projects from IBM.",
      color: "bg-pink-100",
      icon: <FaStar className="text-pink-600" />,
      logo: "https://images.credly.com/images/0b3da20d-83c1-4ff6-bde8-960075bb471f/IBM_Cert_org.png",
    },
    {
      title: "Best Faculty - Centre of Excellence",
      description:
        "Awarded as <strong>Best Faculty - Centre of Excellence</strong> during <strong>AASAN UTSAV 7.0</strong> from Rathinam College of Arts & Science.",
      color: "bg-indigo-100",
      icon: <FaCrown className="text-indigo-600" />,
      logo: "https://th.bing.com/th/id/OIP.WPOOn94VxQg5G8YjVATGkgHaGf?rs=1&pid=ImgDetMain",
    },
    {
      title: "Best Hackathon Mentor",
      description:
        "Awarded for <strong>Best Faculty Contributions for Hackathon.</strong>",
      color: "bg-red-100",
      icon: <FaMedal className="text-red-600" />,
      logo: "https://th.bing.com/th/id/OIP.WPOOn94VxQg5G8YjVATGkgHaGf?rs=1&pid=ImgDetMain",
    },
    {
      title: "Evaluator & Resource Person",
      description:
        "Acted as <strong>Evaluator & Resource Person</strong> for <strong>Socio-Tech Hackathon</strong> at KPR College of Arts, Science, and Research.",
      color: "bg-teal-100",
      icon: <FaAward className="text-teal-600" />,
      logo: "https://www.mathworks.com/academia/tah-portal/kpr-institute-of-engineering-and-technology-31501138/_jcr_content/schoolLogo.adapt.full.high.jpg/1594770319547.jpg",
    },
    {
      title: "Research Article Writing",
      description:
        "Acted as <strong>Resource Person for Research Article Writing</strong> at Kamadenu Arts and Science College.",
      color: "bg-orange-100",
      icon: <FaRegLightbulb className="text-orange-600" />,
      logo: "https://yt3.googleusercontent.com/ytc/AL5GRJWKdG6BAFqZCXTIsW-d66iZGjDVsBbEHv_JXYTw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Design Thinking Workshop",
      description:
        "Acted as <strong>Resource Person</strong> on the topic <strong>'Design Thinking'</strong> at Kongunadu Arts and Science College.",
      color: "bg-cyan-100",
      icon: <FaRegLightbulb className="text-cyan-600" />,
      logo: "https://www.facultyplus.com/wp-content/uploads/2021/07/Kongunadu-College-Logo.jpg",
    },
    {
      title: "Best Paper Award",
      description:
        "Received the <strong>Best Paper Award</strong> for the title <strong>'Technology Embedded Education: The Future of Learning'</strong> at a <strong>NAAC Sponsored TWO-DAY NATIONAL CONFERENCE</strong> on <strong>'Best Practices of Research & Innovation in STEAM Higher Education - A Step Forward to Glorify Sustainable Development Goals Through Indian Knowledge System'</strong> organized by <strong>Shrimathi Devkunvar Nanalal Bhatt Vaishnav College for Women.</strong>",
      color: "bg-lime-100",
      icon: <FaTrophy className="text-lime-600" />,
      logo: "https://th.bing.com/th/id/OIP._rBoQ5nemwbIGRD-paBRHAHaET?rs=1&pid=ImgDetMain",
    },
  ];

  // For floating animations
  const floatingIcons = [
    { icon: <FaTrophy className="text-yellow-500" />, size: "w-12 h-12", position: "top-1/4 left-10" },
    { icon: <FaStar className="text-purple-500" />, size: "w-8 h-8", position: "top-1/3 right-20" },
    { icon: <FaMedal className="text-blue-500" />, size: "w-10 h-10", position: "bottom-1/4 left-20" },
    { icon: <FaCertificate className="text-pink-500" />, size: "w-14 h-14", position: "bottom-1/3 right-16" },
    { icon: <FaCrown className="text-amber-500" />, size: "w-12 h-12", position: "top-20 left-1/3" },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Floating Elements */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute opacity-10 ${item.size} ${item.position} z-0`}
          animate={{
            y: [0, -15, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-400 to-cyan-300"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-purple-500 to-pink-500"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl font-bold mb-6 relative inline-block"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Honors & Accolades
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            A showcase of excellence, innovation, and dedication recognized across educational institutions and organizations
          </motion.p>
        </motion.div>

        {/* Awards Grid with Improved Layout and Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
              }}
              className={`relative p-8 rounded-3xl backdrop-blur-lg ${award.color} bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 shadow-xl border-t border-l border-white border-opacity-20`}
            >
              {/* Animated Glow on Hover */}
              <motion.div
                className="absolute inset-0 -z-10 opacity-0 bg-gradient-to-br from-white to-transparent rounded-3xl blur-xl"
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated Decoration */}
              <motion.div
                className="absolute top-4 right-4 text-4xl opacity-20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                {award.icon || <FaCertificate />}
              </motion.div>

              {/* Content with Improved Layout */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                    whileHover={{ rotate: 5 }}
                  >
                    {/* Award Logo */}
                    <img
                      src={award.logo}
                      alt={award.title}
                      className="w-12 h-12 object-contain relative z-10"
                    />
                    {/* Logo Background Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-50"
                      animate={{
                        background: [
                          "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
                          "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
                          "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
                <div>
                  <motion.h3
                    className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent"
                    dangerouslySetInnerHTML={{ __html: award.title }}
                  />
                  <motion.div
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    className="prose text-gray-700 space-y-2"
                    dangerouslySetInnerHTML={{ __html: award.description }}
                  />

                  {/* Continuing from previous code */}
                </div>
              </div>

              {/* Interactive Bottom Line with Enhanced Animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-0 rounded-b-3xl"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover Particles Effect */}
              <motion.div
                className="absolute bottom-4 right-4 text-xs font-medium text-gray-500 opacity-0"
                whileHover={{ opacity: 0.7 }}
              >
                • Achievement •
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            {
              icon: <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />,
              number: "11+",
              label: "Projects Funded",
              color: "from-blue-600 to-cyan-500"
            },
            {
              icon: <FaAward className="text-4xl text-purple-400 mx-auto mb-4" />,
              number: "50+",
              label: "Total Awards",
              color: "from-purple-600 to-pink-500"
            },
            {
              icon: <FaCertificate className="text-4xl text-yellow-400 mx-auto mb-4" />,
              number: "15+",
              label: "Certifications",
              color: "from-amber-500 to-yellow-400"
            },
            {
              icon: <FaRegLightbulb className="text-4xl text-pink-400 mx-auto mb-4" />,
              number: "100+",
              label: "Innovations",
              color: "from-pink-500 to-rose-400"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.03 }}
              className="p-6 backdrop-blur-md bg-white bg-opacity-10 rounded-xl shadow-lg border border-white border-opacity-20 group transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-violet-600 "
                style={{ backgroundImage: `linear-gradient(to right, ${stat.color})` }}
              >
                {stat.number}
              </motion.div>

              <div className="text-violet-400  transition-colors duration-300">
                {stat.label}
              </div>

              <motion.div
                className="w-1/2 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-all duration-300"
                style={{ backgroundImage: `linear-gradient(to right, ${stat.color})` }}
                whileHover={{ width: "80%" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section with Better Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center relative"
        >
          <motion.div
            className="absolute inset-0 -z-10 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at center, rgba(191,219,254,0.3) 0%, rgba(0,0,0,0) 70%)",
                "radial-gradient(circle at center, rgba(216,180,254,0.3) 0%, rgba(0,0,0,0) 70%)",
                "radial-gradient(circle at center, rgba(191,219,254,0.3) 0%, rgba(0,0,0,0) 70%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.h3
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Want to Collaborate on Innovative Projects?
          </motion.h3>

          <motion.p
            className="text-blue-200 max-w-2xl mx-auto mb-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's combine our expertise and create groundbreaking solutions together
          </motion.p>

          <motion.button
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="relative z-10">Get in Touch</span>

            {/* Button Glow Effect */}
            <motion.span
              className="absolute inset-0 -z-5 opacity-0 group-hover:opacity-30 bg-white blur-md"
              whileHover={{ opacity: 0.3, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            />

            {/* Button Ripple Effect */}
            <motion.span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-white opacity-30 -z-5"
              whileTap={{
                width: 200,
                height: 200,
                opacity: 0,
                transition: { duration: 0.8 }
              }}
            />
          </motion.button>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"
            animate={{ width: ["30%", "60%", "30%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Scrolling Recognition Tags */}
        <div className="mt-24 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {["INNOVATION", "EXCELLENCE", "RECOGNITION", "LEADERSHIP", "MENTORSHIP", "RESEARCH", "CREATIVITY", "ACHIEVEMENT", "TECHNOLOGY", "EDUCATION"].map((tag, i) => (
              <span key={i} className="mx-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 opacity-30">{tag}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards;