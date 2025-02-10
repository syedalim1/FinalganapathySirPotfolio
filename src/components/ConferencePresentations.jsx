import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaRegCalendarAlt,
  FaDownload,
  FaSearch,
  FaFilter,
  FaTimes,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";

const presentations = [
  {
    title:
      "A Comprehensive Study on AI and ML Techniques in Healthcare Diagnostics Challenges and Future Directions",
    conference:
      "National Conference on NEXT GEN Information Science, Communication and Technology (NGISCT’24)",
    date: "2024",
  },
  {
    title:
      "Optimization of Opinion Mining on Twitter Data Using Machine Learning Approaches and Semantic Analysis",
    conference:
      "International Conference on Intelligent Computing and Technology, ICICT 066",
    date: "2024",
  },
  {
    title:
      "Geographic Routing for Rest Scheduling in Duty-Cycled Mobile Sensor Networks",
    conference:
      "5th International Multidisciplinary Conference on INFORMATION SCIENCE, MANAGEMENT RESEARCH & SOCIAL SCIENCES (IMCISMRSS - 2024)",
    date: "13th & 14th March 2024",
  },
  {
    title: "Controlling Use of Alcohol Consumption through Data Analytics",
    conference:
      "International Conference on SAMVIT 2023 Emerging Trends in Science and Technology",
    date: "August 2023",
  },
  {
    title: "Technology Embedded Education: The Future of Learning",
    conference:
      "National Conference on Best Practices Of Research & Innovation In Steam Higher Education",
    date: "Mar-2023",
  },
  {
    title:
      "An Analytical Study of Blockchain Technologies And Its Potential Applications",
    conference: "National Conference on Intelligent Computing",
    date: "Feb-2023",
  },
  {
    title:
      "A Recent Trend Investigation at Evolution of Ransomware and Safety Precautions",
    conference: "International Conference on Computing & Intelligence System",
    date: "Jan-2023",
  },
  {
    title: "An Analytical Study of Artificial Intelligence and its Appliances",
    conference:
      "International Conference on Recent Trends in Computer Science Engineering and Information Technology",
    date: "Nov-2022",
  },
  {
    title:
      "A Study of Dynamic Analysis of Ransomware Evolution and Safety Measures",
    conference:
      "International Interdisciplinary Research Conference on Recent Technological Development in Computational Mathematics and its Applications",
    date: "Sept 2022",
  },
  {
    title: "Future Effectiveness of Technology Enabled Learning In Education",
    conference:
      "National Seminar on New Education Policy 2020 A Gateway to Pedagogical and Curricular Structure Changes for 21st Century",
    date: "Aug-2022",
  },
  {
    title:
      "Upcoming Trends and Challenges in Digital Transformation on Business Management in Lights of Globalization",
    conference:
      "International Conference on Emerging Trends and Challenges in Modern Business Management (ICETCMBM-2022)",
    date: "May-2022",
  },
  {
    title:
      "Techniques for Framing an Intelligent Home-Based on Mobile RFID Using IOT",
    conference:
      "International Conference on Interdisciplinary Research Innovation in Science and Technology (ICIRIST-2022)",
    date: "May-2022",
  },
  {
    title: "Intelligence Tutoring Systems and Application of AI in Education",
    conference:
      "International Conference on Artificial Intelligence and Quantum Computing (ICAIQC-2021)",
    date: "2021",
  },
  {
    title:
      "A Research on Crop Yield Estimation of Banana in Various Soil and Weather Around North Coimbatore Area Using Data Mining Algorithm",
    conference:
      "International Conference On New Achievements In Multidisciplinary Research (ICNAMR-19)",
    date: "26th September-2019",
  },
  {
    title:
      "Enhancing the Growth of Banana Based on Environmental Changes Using K-Means Algorithm",
    conference:
      "10th National Conference On Machine Learning And Smart Technology (NCMLST-2020)",
    date: "12th February-2020",
  },
  {
    title: "Artificial Intelligence Assessments in Different Applications",
    conference:
      "National Conference On Intelligent Learning And Computing (NCILC19)",
    date: "February-2019",
  },
  {
    title:
      "An Agent Based Service Ranking for Cloud Service Provider (CSP) Selection in Cloud Environment",
    conference:
      "10th National Conference On Machine Learning And Smart Technology (NCMLST-2020)",
    date: "12th February-2020",
  },
  {
    title: "Transmitting Crypt Datas",
    conference:
      "International Conference On Advances In Information Technology And Networking (ICATN19)",
    date: "February-2019",
  },
  {
    title:
      "Estimation of Profit Ratio of Jasmine Farmers in First Lean Season Using K-Means Clustering Algorithm",
    conference:
      "10th National Conference On Machine Learning And Smart Technology (NCMLST-2020)",
    date: "12th February-2020",
  },
];

const ConferencePresentations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const years = ["All", "2024", "2023", "2022", "2021", "2020", "2019"];

  // Filter presentations based on search and year
  const filteredPresentations = presentations
    .filter((presentation) => {
      const matchesSearch =
        presentation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        presentation.conference.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear =
        selectedYear === "All" || presentation.date.includes(selectedYear);
      return matchesSearch && matchesYear;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredPresentations.length / itemsPerPage);
  const paginatedPresentations = filteredPresentations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Download full list as JSON
  const downloadFullList = () => {
    const jsonString = JSON.stringify(presentations, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "conference_presentations.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative  py-16 px-6 min-h-screen">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-purple-700 rounded-full blur-xl opacity-20"
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-700 rounded-full blur-xl opacity-20"
        animate={{ y: [0, -100, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Conference Presentations
          </h2>
          <p className="text-xl text-purple-200">
            Sharing knowledge through academic discourse
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center"
        >
          {[
            { icon: FaMicrophone, value: "18+", label: "Presentations" },
            { icon: FaRegCalendarAlt, value: "5+", label: "Years Active" },
            {
              icon: FaMicrophone,
              value: "12+",
              label: "International Conferences",
            },
            { icon: FaRegCalendarAlt, value: "6", label: "2024 Presentations" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/10"
            >
              <stat.icon className="text-4xl text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search, Filters, and Sort */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex flex-col md:flex-row gap-4 items-center"
        >
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-4 text-purple-400" />
            <input
              type="text"
              placeholder="Search presentations..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <FaFilter />
            Filter by Year
          </button>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            {sortOrder === "asc" ? <FaSortAmountDown /> : <FaSortAmountUp />}
            Sort by Date
          </button>
        </motion.div>

        {/* Filter Dropdown */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-purple-200">
                Filter by Year
              </h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-purple-400 hover:text-purple-300"
              >
                <FaTimes />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedYear === year
                      ? "bg-purple-600 text-white"
                      : "bg-white/10 text-purple-200 hover:bg-white/20"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Presentations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPresentations.map((presentation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm shadow-xl rounded-3xl p-6 relative overflow-hidden group border border-white/10"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <FaMicrophone className="text-2xl text-purple-400 mr-3 mt-1" />
                  <h3 className="text-lg font-bold text-white">
                    {presentation.title}
                  </h3>
                </div>
                <p className="text-sm text-purple-200 mb-3">
                  {presentation.conference}
                </p>
                <div className="flex items-center text-sm text-purple-300">
                  <FaRegCalendarAlt className="mr-2" />
                  <span>{presentation.date}</span>
                </div>
              </div>

              {/* Progress Bar Animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`mx-1 px-4 py-2 rounded-full ${
                currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-purple-200 hover:bg-white/20"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want Full List of Presentations?
          </h3>
          <button
            onClick={downloadFullList}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto gap-2"
          >
            <FaDownload />
            Download Complete Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConferencePresentations;
