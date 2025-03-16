import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie";
import {
  FaMicrophone,
  FaRegCalendarAlt,
  FaDownload,
  FaSearch,
  FaFilter,
  FaTimes,
  FaSortAmountDown,
  FaSortAmountUp,
  FaGlobe,
  FaAward,
  FaShare,
  FaBookmark,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Sample presentation data
const presentations = [
  {
    title:
      "A Comprehensive Study on AI and ML Techniques in Healthcare Diagnostics Challenges and Future Directions",
    conference:
      "National Conference on NEXT GEN Information Science, Communication and Technology (NGISCT'24)",
    date: "2024",
    type: "International",
    featured: true,
  },
  {
    title:
      "Optimization of Opinion Mining on Twitter Data Using Machine Learning Approaches and Semantic Analysis",
    conference:
      "International Conference on Intelligent Computing and Technology, ICICT 066",
    date: "2024",
    type: "International",
    featured: true,
  },
  {
    title:
      "Geographic Routing for Rest Scheduling in Duty-Cycled Mobile Sensor Networks",
    conference:
      "5th International Multidisciplinary Conference on INFORMATION SCIENCE, MANAGEMENT RESEARCH & SOCIAL SCIENCES (IMCISMRSS - 2024)",
    date: "13th & 14th March 2024",
    type: "International",
    featured: false,
  },
  {
    title: "Controlling Use of Alcohol Consumption through Data Analytics",
    conference:
      "International Conference on SAMVIT 2023 Emerging Trends in Science and Technology",
    date: "August 2023",
    type: "International",
    featured: false,
  },
  {
    title: "Technology Embedded Education: The Future of Learning",
    conference:
      "National Conference on Best Practices Of Research & Innovation In Steam Higher Education",
    date: "Mar-2023",
    type: "National",
    featured: true,
  },
  {
    title:
      "An Analytical Study of Blockchain Technologies And Its Potential Applications",
    conference: "National Conference on Intelligent Computing",
    date: "Feb-2023",
    type: "National",
    featured: false,
  },
  {
    title:
      "A Recent Trend Investigation at Evolution of Ransomware and Safety Precautions",
    conference: "International Conference on Computing & Intelligence System",
    date: "Jan-2023",
    type: "International",
    featured: false,
  },
  {
    title: "An Analytical Study of Artificial Intelligence and its Appliances",
    conference:
      "International Conference on Recent Trends in Computer Science Engineering and Information Technology",
    date: "Nov-2022",
    type: "International",
    featured: true,
  },
  {
    title:
      "A Study of Dynamic Analysis of Ransomware Evolution and Safety Measures",
    conference:
      "International Interdisciplinary Research Conference on Recent Technological Development in Computational Mathematics and its Applications",
    date: "Sept 2022",
    type: "International",
    featured: false,
  },
  {
    title: "Future Effectiveness of Technology Enabled Learning In Education",
    conference:
      "National Seminar on New Education Policy 2020 A Gateway to Pedagogical and Curricular Structure Changes for 21st Century",
    date: "Aug-2022",
    type: "National",
    featured: false,
  },
  {
    title:
      "Upcoming Trends and Challenges in Digital Transformation on Business Management in Lights of Globalization",
    conference:
      "International Conference on Emerging Trends and Challenges in Modern Business Management (ICETCMBM-2022)",
    date: "May-2022",
    type: "International",
    featured: false,
  },
  {
    title:
      "Techniques for Framing an Intelligent Home-Based on Mobile RFID Using IOT",
    conference:
      "International Conference on Interdisciplinary Research Innovation in Science and Technology (ICIRIST-2022)",
    date: "May-2022",
    type: "International",
    featured: false,
  },
  {
    title: "Intelligence Tutoring Systems and Application of AI in Education",
    conference:
      "International Conference on Artificial Intelligence and Quantum Computing (ICAIQC-2021)",
    date: "2021",
    type: "International",
    featured: true,
  },
  {
    title:
      "A Research on Crop Yield Estimation of Banana in Various Soil and Weather Around North Coimbatore Area Using Data Mining Algorithm",
    conference:
      "International Conference On New Achievements In Multidisciplinary Research (ICNAMR-19)",
    date: "26th September-2019",
    type: "International",
    featured: false,
  },
  {
    title:
      "Enhancing the Growth of Banana Based on Environmental Changes Using K-Means Algorithm",
    conference:
      "10th National Conference On Machine Learning And Smart Technology (NCMLST-2020)",
    date: "12th February-2020",
    type: "National",
    featured: false,
  },
  {
    title: "Artificial Intelligence Assessments in Different Applications",
    conference:
      "National Conference On Intelligent Learning And Computing (NCILC19)",
    date: "February-2019",
    type: "National",
    featured: false,
  },
  {
    title:
      "An Agent Based Service Ranking for Cloud Service Provider (CSP) Selection in Cloud Environment",
    conference:
      "10th National Conference On Machine Learning And Smart Technology (NCMLST-2020)",
    date: "12th February-2020",
    type: "National",
    featured: false,
  },
  {
    title: "Transmitting Crypt Datas",
    conference:
      "International Conference On Advances In Information Technology And Networking (ICATN19)",
    date: "February-2019",
    type: "International",
    featured: false,
  },
  {
    title:
      "Estimation of Profit Ratio of Jasmine Farmers in First Lean Season Using K-Means Clustering Algorithm",
    conference:
      "10th National Conference On Machine Learning And Smart Technology (NCMLST-2020)",
    date: "12th February-2020",
    type: "National",
    featured: false,
  },
];

// Animation JSON data
const academicAnimationData = {
  v: "5.7.8",
  fr: 60,
  ip: 0,
  op: 180,
  w: 1200,
  h: 1200,
  nm: "Academic Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [0], h: 0 },
            { t: 60, s: [100], h: 0 },
            { t: 120, s: [0], h: 0 },
            { t: 180, s: [100], h: 0 },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [600, 600, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100], h: 0 },
            { t: 90, s: [120, 120, 100], h: 0 },
            { t: 180, s: [100, 100, 100], h: 0 },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [300, 300], ix: 2 },
              p: { a: 0, k: [0, 0] },
              nm: "Circle",
              hd: false,
            },
            {
              ty: "st",
              c: { a: 0, k: [0.5, 0.2, 0.8, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 20 },
              lc: 1,
              lj: 1,
              ml: 4,
              nm: "Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.1, 0.5, 1] },
              o: { a: 0, k: 20 },
              r: 1,
              nm: "Fill",
              hd: false,
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 }, sk: { a: 0, k: 0 }, sa: { a: 0, k: 0 }, nm: "Transform" }
          ],
          nm: "Circle Group",
          hd: false,
        },
      ],
    },
  ],
};

const ConferencePresentations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc"); // 'asc' or 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedPresentation, setSelectedPresentation] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [visiblePresentations, setVisiblePresentations] = useState([]);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6; // Number of items per page

  const years = ["All", "2024", "2023", "2022", "2021", "2020", "2019"];
  const types = ["All", "International", "National"];

  useEffect(() => {
    // Simulating data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // Filter presentations based on search, year, and type
  const filteredPresentations = presentations.filter((presentation) => {
    const matchesSearch =
      presentation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      presentation.conference.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear =
      selectedYear === "All" || presentation.date.includes(selectedYear);
    const matchesType =
      selectedType === "All" || presentation.type === selectedType;
    return matchesSearch && matchesYear && matchesType;
  }).sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  // Get featured presentations
  const featuredPresentations = presentations.filter(
    (presentation) => presentation.featured
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPresentations.length / itemsPerPage);
  const paginatedPresentations = filteredPresentations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedYear, selectedType, sortOrder]);

  // Animate presentations when they come into view
  useEffect(() => {
    setVisiblePresentations(paginatedPresentations);
  }, [paginatedPresentations]);

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

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: academicAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Count presentations by year
  const presentationsByYear = presentations.reduce((acc, presentation) => {
    const year = presentation.date.split("-")[0].split(" ")[0];
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  // Count presentations by type
  const presentationsByType = presentations.reduce((acc, presentation) => {
    acc[presentation.type] = (acc[presentation.type] || 0) + 1;
    return acc;
  }, {});

  // Open detail modal for a presentation
  const openDetailModal = (presentation) => {
    setSelectedPresentation(presentation);
    setIsDetailModalOpen(true);
  };

  // JSX for the particle background
  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );

  // Loading spinner
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-t-purple-500 border-r-indigo-500 border-b-blue-500 border-l-violet-500 rounded-full"
        />



      </div >
    );
  }

  return (
    <section className="relative py-16 px-6 min-h-screen ">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-purple-700 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-700 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, -100, 0],
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-700 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative z-10">
        {/* Animated Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-12"
        >
          <div className="mb-6 mx-auto w-24 h-24 relative">
            <Lottie options={defaultOptions} height={96} width={96} />
          </div>
          <motion.h2
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #c471f5 0%, #fa71cd 50%, #7795f8 100%)"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            Conference Presentations
          </motion.h2>
          <motion.p
            className="text-xl text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Sharing cutting-edge research and knowledge through academic discourse across international and national platforms
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center"
        >
          {[
            {
              icon: FaMicrophone,
              value: presentations.length,
              label: "Presentations",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: FaRegCalendarAlt,
              value: Object.keys(presentationsByYear).length,
              label: "Years Active",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: FaGlobe,
              value: presentations.filter(p => p.type === "International").length,
              label: "International",
              color: "from-emerald-500 to-teal-500"
            },
            {
              icon: FaAward,
              value: presentations.filter(p => p.featured).length,
              label: "Featured Research",
              color: "from-amber-500 to-orange-500"
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 50, opacity: 0 },
                show: { y: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 rounded-xl   overflow-hidden group"
            >
              {/* Gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-4xl text-white mx-auto mb-4 bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon />
                </motion.div>
                <motion.div
                  className="text-4xl font-bold text-white"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}+
                </motion.div>
                <div className="text-white/90 font-medium mt-1">{stat.label}</div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-full opacity-10" />
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-white rounded-full opacity-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex justify-end"
        >
          <div className="bg-white/10 backdrop-blur-sm p-1 rounded-full">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-full ${viewMode === "grid"
                ? "bg-indigo-600 text-white"
                : "text-purple-200 hover:text-white"
                }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-full ${viewMode === "list"
                ? "bg-indigo-600 text-white"
                : "text-purple-200 hover:text-white"
                }`}
            >
              List View
            </button>
          </div>
        </motion.div>

        {/* Interactive Search, Filters, and Sort */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10  "
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-4 text-purple-400" />
              <input
                type="text"
                placeholder="Search presentations..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:  transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
              >
                <FaFilter />
                <span>Filter</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={{ x: -100 }}
                  whileHover={{ x: 200 }}
                  transition={{ duration: 0.5 }}
                />
              </button>

            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-purple-200">
                      Advanced Filters
                    </h3>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    {/* Year Filter */}
                    <div>
                      <h4 className="text-sm font-medium text-purple-300 mb-2">Year</h4>
                      <div className="flex flex-wrap gap-2">
                        {years.map((year) => (
                          <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-4 py-2 rounded-full text-sm ${selectedYear === year
                              ? "bg-purple-600 text-white"
                              : "bg-white/10 text-purple-200 hover:bg-white/20"
                              }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* Type Filter */}
                    <div>
                      <h4 className="text-sm font-medium text-purple-300 mb-2">Type</h4>
                      <div className="flex flex-wrap gap-2">
                        {types.map((type) => (
                          <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-4 py-2 rounded-full text-sm ${selectedType === type
                              ? "bg-indigo-600 text-white"
                              : "bg-white/10 text-purple-200 hover:bg-white/20"
                              }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>



        {/* Dynamic View - Grid or List */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            >
              {paginatedPresentations.map((presentation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => openDetailModal(presentation)}
                  className="bg-white/10 backdrop-blur-md shadow-xl rounded-3xl p-6 relative overflow-hidden group border border-white/10 cursor-pointer transform transition-all duration-300"
                >
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Badge for type */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${presentation.type === "International"
                        ? "bg-blue-600/60 text-blue-100"
                        : "bg-purple-600/60 text-purple-100"
                      }`}>
                      {presentation.type}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {presentation.featured && (
                    <div className="absolute top-4 left-4">
                      <FaAward className="text-yellow-400" />
                    </div>
                  )}

                  <div className="relative z-10 h-full pt-3 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {presentation.title.length > 70
                          ? presentation.title.substring(0, 70) + "..."
                          : presentation.title}
                      </h3>
                      <p className="text-sm text-purple-200 mb-4">
                        {presentation.conference.length > 50
                          ? presentation.conference.substring(0, 50) + "..."
                          : presentation.conference}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center text-sm text-purple-300">
                        <FaRegCalendarAlt className="mr-2" />
                        <span>{presentation.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-8"
            >
              <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-900/70 to-purple-900/70">
                      <th className="p-4 text-left text-white font-medium">Title</th>
                      <th className="p-4 text-left text-white font-medium hidden md:table-cell">Conference</th>
                      <th className="p-4 text-left text-white font-medium">Date</th>
                      <th className="p-4 text-left text-white font-medium hidden sm:table-cell">Type</th>
                      <th className="p-4 text-left text-white font-medium w-20">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedPresentations.map((presentation, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                        className="border-t border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 text-white">
                          <div className="flex items-center">
                            {presentation.featured && (
                              <FaAward className="text-yellow-400 mr-2 flex-shrink-0" />
                            )}
                            <span className="line-clamp-2">{presentation.title}</span>
                          </div>
                        </td>
                        <td className="p-4 text-purple-200 hidden md:table-cell">
                          <span className="line-clamp-1">{presentation.conference}</span>
                        </td>
                        <td className="p-4 text-purple-300">{presentation.date}</td>
                        <td className="p-4 hidden sm:table-cell">
                          <span className={`px-2 py-1 rounded-full text-xs ${presentation.type === "International"
                              ? "bg-blue-600/60 text-blue-100"
                              : "bg-purple-600/60 text-purple-100"
                            }`}>
                            {presentation.type}
                          </span>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openDetailModal(presentation);
                            }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full"
                          >
                            <FaSearch size={12} />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {filteredPresentations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl text-center my-12"
          >
            <div className="text-6xl mb-4 text-purple-300">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Presentations Found</h3>
            <p className="text-purple-200">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("All");
                setSelectedType("All");
              }}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center mt-8 mb-4 gap-2"
        >
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === 1
                ? "bg-white/5 text-gray-400 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
          >
            <FaChevronLeft size={14} />
          </button>

          {totalPages > 5 ? (
            <>
              {Array.from({ length: Math.min(3, totalPages) }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full ${currentPage === i + 1
                      ? "bg-purple-600 text-white"
                      : "bg-white/10 text-purple-200 hover:bg-white/20"
                    }`}
                >
                  {i + 1}
                </button>
              ))}

              {currentPage > 3 && <span className="text-white/50">...</span>}

              {currentPage > 3 && currentPage < totalPages - 2 && (
                <button
                  className="w-10 h-10 rounded-full bg-purple-600 text-white"
                >
                  {currentPage}
                </button>
              )}

              {currentPage < totalPages - 2 && <span className="text-white/50">...</span>}

              {totalPages > 3 && (
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`w-10 h-10 rounded-full ${currentPage === totalPages
                      ? "bg-purple-600 text-white"
                      : "bg-white/10 text-purple-200 hover:bg-white/20"
                    }`}
                >
                  {totalPages}
                </button>
              )}
            </>
          ) : (
            Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full ${currentPage === i + 1
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-purple-200 hover:bg-white/20"
                  }`}
              >
                {i + 1}
              </button>
            ))
          )}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === totalPages || totalPages === 0
                ? "bg-white/5 text-gray-400 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
          >
            <FaChevronRight size={14} />
          </button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-12 border border-white/10 text-center"
        >
          <p className="text-purple-200">
            Showing {paginatedPresentations.length} of {filteredPresentations.length} presentations
            {selectedYear !== "All" && ` from ${selectedYear}`}
            {selectedType !== "All" && ` (${selectedType})`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center p-8 bg-gradient-to-br from-indigo-900/70 to-purple-900/70 backdrop-blur-md rounded-2xl border border-white/10  "
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <FaDownload className="text-white text-2xl" />
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Download Complete Research Portfolio
          </h3>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Get the full list of presentations in JSON format for easy integration with your reference manager or personal database.
          </p>
          <motion.button
            onClick={downloadFullList}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto gap-2 relative overflow-hidden group"
          >
            <FaDownload />
            <span>Download JSON</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              initial={{ x: -100 }}
              whileHover={{ x: 200 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}



export default ConferencePresentations;