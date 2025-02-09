import { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaFileAlt, FaGraduationCap, FaSearch } from "react-icons/fa";

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

  return (
    <section className="relative  py-16 px-6">
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
            Publications
          </h2>
          <p className="text-xl text-white">
            Explore my contributions to academia and research
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <button
            className={`px-6 py-3 mx-2 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeTab === "books"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("books")}
          >
            Book Publications
          </button>
          <button
            className={`px-6 py-3 mx-2 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeTab === "journals"
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("journals")}
          >
            Journal Publications
          </button>
        </motion.div>

        {/* Publications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications[activeTab].map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {activeTab === "books" ? (
                    <FaBook className="text-4xl text-blue-600" />
                  ) : (
                    <FaFileAlt className="text-4xl text-purple-600" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {pub.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{pub.publisher}</p>
                  <p className="text-gray-600 mt-1">
                    <span className="font-semibold">Date:</span> {pub.date}
                  </p>
                </div>
              </div>
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
            <FaBook className="text-4xl text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">3+</div>
            <div className="text-gray-600">Books Published</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaFileAlt className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">13+</div>
            <div className="text-gray-600">Journal Papers</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaGraduationCap className="text-4xl text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">5+</div>
            <div className="text-gray-600">Scopus Indexed</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FaSearch className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800">10+</div>
            <div className="text-gray-600">Research Areas</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Interested in Collaborating on Research?
          </h3>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
            Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
