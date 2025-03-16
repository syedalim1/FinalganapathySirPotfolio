import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <header className="relative text-white p-4 w-full z-50  ">
      {/* Dynamic Background */}
      <div className="absolute inset-0  overflow-hidden">
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.1
            }}
            animate={{
              x: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ],
              y: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: (i % 3 + 1) * 4 + 'px',
              height: (i % 3 + 1) * 4 + 'px',
              left: `${i * 7}%`,
              top: `${(i * 5) % 100}%`
            }}
          />
        ))}

        {/* Responsive animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(76, 29, 149, 0.5) 0%, rgba(30, 58, 138, 0) 70%)",
              "radial-gradient(circle at 70% 70%, rgba(76, 29, 149, 0.5) 0%, rgba(30, 58, 138, 0) 70%)",
              "radial-gradient(circle at 30% 70%, rgba(76, 29, 149, 0.5) 0%, rgba(30, 58, 138, 0) 70%)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Mouse-following highlight */}
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-10 bg-blue-400 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto relative z-10"
      >
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <motion.h1
            className="text-3xl font-bold relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              Mr. N. Ganapathiram
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <motion.ul
              className="flex space-x-4"
              variants={containerVariants}
            >
              {[
                { path: "/", label: "About" },
                { path: "/education", label: "Education" },
                { path: "/experience", label: "Experience" },
                { path: "/awards", label: "Awards" },
                { path: "/publications", label: "Publications" },
                { path: "/conferencePresentations", label: "Conference Presentations" },
                { path: "/areaOfInterest", label: "Area of Interest" },
                { path: "/rolesAndResponsibilities", label: "Roles and Responsibilities" },
                { path: "/corevalues", label: "Motta Vision" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={item.path}
                    className="relative group overflow-hidden block px-2 py-1"
                  >
                    <span className="relative z-10 font-medium">{item.label}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl bg-gradient-to-r from-blue-700 to-purple-700 p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 bg-gradient-to-br from-gray-800/90 via-blue-900/90 to-purple-900/90 backdrop-blur-md rounded-xl p-4  "
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.ul
              className="flex flex-col space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { path: "/", label: "About" },
                { path: "/education", label: "Education" },
                { path: "/experience", label: "Experience" },
                { path: "/awards", label: "Awards" },
                { path: "/publications", label: "Publications" },
                { path: "/conferencePresentations", label: "Conference Presentations" },
                { path: "/areaOfInterest", label: "Area of Interest" },
                { path: "/personalProfile", label: "Personal Profile" },
                { path: "/rolesAndResponsibilities", label: "Roles and Responsibilities" },
                { path: "/corevalues", label: "Motta Vision" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={item.path}
                    className="block w-full text-lg font-medium px-2 py-1 hover:text-blue-300 transition duration-300"
                    onClick={toggleMobileMenu}
                  >
                    <motion.div
                      whileHover={{
                        color: "#93c5fd",
                        textShadow: "0 0 5px rgba(147, 197, 253, 0.5)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </motion.div>
    </header>
  );
};

export default Header;