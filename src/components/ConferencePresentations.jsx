import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
        Conference Presentations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {presentations.map((presentation, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {presentation.title}
            </h3>
            <p className="text-sm text-gray-600">{presentation.conference}</p>
            <p className="text-xs text-gray-500 mt-2">📅 {presentation.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ConferencePresentations;
