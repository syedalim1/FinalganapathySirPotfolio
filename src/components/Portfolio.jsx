import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wholesale from "./Wholesale";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("hotels");
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0 });

  // Industry-specific data
  const industries = [
    {
      id: "hotels",
      name: "Hotels",
      icon: "🏨",
      features: [
        "Luxury Lobby Furniture",
        "Poolside Loungers",
        "Conference Tables",
      ],
    },
    {
      id: "restaurants",
      name: "Restaurants",
      icon: "🍽️",
      features: [
        "Commercial Kitchen Equipment",
        "Outdoor Dining Sets",
        "Bar Stools",
      ],
    },
    {
      id: "canteens",
      name: "Canteens",
      icon: "🏫",
      features: [
        "Industrial-grade Tables",
        "Stackable Chairs",
        "Cafeteria Counters",
      ],
    },
    {
      id: "events",
      name: "Events",
      icon: "🎪",
      features: ["Stage Structures", "Exhibition Stands", "Portable Seating"],
    },
  ];

  // Projects data with industry-specific details
  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Chain Project",
      client: "The Grand Palace Hotels",
      description:
        "Designed and manufactured 200+ custom steel chairs and tables for a 5-star hotel chain.",
      metrics: {
        timeline: "3 months",
        roi: "40% cost savings compared to imported furniture",
        satisfaction: "98% client satisfaction rate",
      },
      images: [
        "/images/portfolio/hotel1.jpg",
        "/images/portfolio/hotel2.jpg",
        "/images/portfolio/hotel3.jpg",
      ],
      testimonial: {
        author: "Rahul Mehta",
        role: "General Manager, The Grand Palace",
        quote:
          "The furniture pieces not only met our luxury standards but exceeded our expectations in terms of durability.",
      },
      industry: "hotels",
    },
    {
      id: 2,
      title: "Traditional Mandapam Project",
      client: "Royal Wedding Venues",
      description:
        "Created intricate gold-plated steel structures for a traditional wedding venue.",
      metrics: {
        timeline: "2 months",
        roi: "50% reduction in maintenance costs",
        satisfaction: "100% client satisfaction rate",
      },
      images: [
        "/images/portfolio/mandapam1.jpg",
        "/images/portfolio/mandapam2.jpg",
        "/images/portfolio/mandapam3.jpg",
      ],
      testimonial: {
        author: "Priya Reddy",
        role: "Owner, Royal Wedding Venues",
        quote:
          "The gold-plated steel structures perfectly blend tradition with modern durability.",
      },
      industry: "events",
    },
    {
      id: 3,
      title: "Corporate Office Transformation",
      client: "TechCorp India",
      description:
        "Furnished an entire corporate office with modern steel furniture pieces.",
      metrics: {
        timeline: "4 months",
        roi: "35% increase in space efficiency",
        satisfaction: "95% employee satisfaction",
      },
      images: [
        "/images/portfolio/office1.jpg",
        "/images/portfolio/office2.jpg",
        "/images/portfolio/office3.jpg",
      ],
      testimonial: {
        author: "Vikram Shah",
        role: "Facilities Director, TechCorp",
        quote:
          "The ergonomic design and durability of the furniture have significantly improved our workspace.",
      },
      industry: "corporate",
    },
  ];

  // Stats animation
  useEffect(() => {
    const animateStats = () => {
      setStats({ projects: 0, clients: 0, years: 0 });
      setTimeout(() => {
        setStats({ projects: 1500, clients: 420, years: 12 });
      }, 500);
    };
    animateStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative h-[40vh] bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600 opacity-90" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our Projects
            </motion.h1>
            <motion.p
              className="text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transforming spaces with innovative steel furniture solutions
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Steel Solutions for Every Industry
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-all cursor-pointer ${selectedIndustry === industry.id
                    ? "bg-purple-600/20 border-2 border-purple-500"
                    : "bg-white hover:bg-gray-50"
                  }`}
                onClick={() => setSelectedIndustry(industry.id)}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="text-purple-400 mr-2">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.industry === selectedIndustry)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl   overflow-hidden hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-gray-200 relative">
                    {/* Replace with actual images */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Project Image
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-600 font-semibold">
                        {project.client}
                      </span>
                      <button
                        className="text-sm bg-purple-100 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Case Study
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            <div className="text-5xl font-bold text-purple-400 mb-2">
              {stats.projects}+
            </div>
            <div className="text-gray-300">Projects Completed</div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-5xl font-bold text-purple-400 mb-2">
              {stats.clients}+
            </div>
            <div className="text-gray-300">Satisfied Clients</div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-5xl font-bold text-purple-400 mb-2">
              {stats.years}+
            </div>
            <div className="text-gray-300">Years Experience</div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedProject.description}
                </p>

                {/* Project Images */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {selectedProject.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-gray-200 rounded-lg"
                    >
                      {/* Replace with actual images */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Image {index + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(selectedProject.metrics).map(
                    ([key, value]) => (
                      <div key={key} className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-sm text-purple-600 uppercase mb-2">
                          {key}
                        </h4>
                        <p className="font-semibold">{value}</p>
                      </div>
                    )
                  )}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg italic mb-4">
                    "{selectedProject.testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">
                      {selectedProject.testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedProject.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Wholesale />
    </div>
  );
};

export default Portfolio;
