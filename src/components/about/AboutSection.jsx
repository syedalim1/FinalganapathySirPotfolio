import React, { useRef, useState, useEffect } from 'react'
import { FaBook, FaBriefcase, FaGlobe, FaMoon, FaSun, FaStar, FaCode } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion";

function AboutSection() {
    // Color themes
    const themes = {
        light: {
            cardBg: "",
            buttonBg: "bg-indigo-500",
            textColor: "text-white",
        },
        dark: {
            cardBg: "",
            buttonBg: "bg-indigo-800",
            textColor: "text-white",
        }
    };

    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? themes.dark : themes.light;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [animateStars, setAnimateStars] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Start star animation after component mounts
        setTimeout(() => {
            setAnimateStars(true);
        }, 500);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
        }
    };

    const iconVariants = {
        hover: {
            rotate: [0, 10, -10, 0],
            scale: 1.2,
            transition: {
                duration: 0.5
            }
        }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
            ease: "easeInOut"
        }
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    // Generate random stars
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 40; i++) {
            const size = Math.random() * 3 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 3 + 2;

            stars.push(
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full pointer-events-none"
                    style={{
                        width: size + 'px',
                        height: size + 'px',
                        left: x + '%',
                        top: y + '%',
                    }}
                    initial={{ opacity: 0 }}
                    animate={animateStars ? {
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0]
                    } : {}}
                    transition={{
                        repeat: Infinity,
                        duration: duration,
                        delay: delay,
                        ease: "easeInOut"
                    }}
                />
            );
        }
        return stars;
    };

    return (
        <div className="  p-4 md:p-8 transition-all duration-500 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                {renderStars()}

                {/* Decorative Circles */}
                <motion.div
                    className="absolute rounded-full bg-purple-500 opacity-10 blur-3xl"
                    style={{ width: '40vw', height: '40vw', top: '10%', left: '60%' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute rounded-full bg-blue-500 opacity-10 blur-3xl"
                    style={{ width: '30vw', height: '30vw', top: '60%', left: '5%' }}
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            {/* Theme Toggle Button */}
            <motion.button
                onClick={toggleTheme}
                className={`fixed top-6 right-6 z-50 p-3 rounded-full  `}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(99, 102, 241, 0.7)" }}
                whileTap={{ scale: 0.9 }}
            >
                {isDarkMode ? (
                    <FaSun className="text-yellow-200" size={20} />
                ) : (
                    <FaMoon className="text-indigo-100" size={20} />
                )}
            </motion.button>

            {/* Mouse Follower */}
            <motion.div
                className="fixed pointer-events-none w-12 h-12 rounded-full bg-indigo-500 opacity-40 blur-xl"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    mass: 0.5
                }}
            />
            <motion.div
                className="fixed pointer-events-none w-4 h-4 rounded-full bg-purple-400 opacity-70"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                }}
                transition={{
                    type: "spring",
                    damping: 8,
                    stiffness: 120,
                    mass: 0.2
                }}
            />


            {/* About Details */}
            <motion.section
                className={`relative p-8 md:p-12 rounded-2xl ${theme.cardBg} shadow-xl  mx-auto max-w-4xl backdrop-blur-sm ${isDarkMode ? "bg-opacity-30 border border-indigo-600/30" : "bg-opacity-90 border border-indigo-200"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Decorative Corner Elements - Enhanced */}
                <motion.div
                    className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 rounded-tl-lg border-indigo-500 opacity-70"
                    animate={{ borderColor: ['rgba(99, 102, 241, 0.7)', 'rgba(139, 92, 246, 0.7)', 'rgba(99, 102, 241, 0.7)'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 rounded-tr-lg border-indigo-500 opacity-70"
                    animate={{ borderColor: ['rgba(99, 102, 241, 0.7)', 'rgba(139, 92, 246, 0.7)', 'rgba(99, 102, 241, 0.7)'] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 rounded-bl-lg border-indigo-500 opacity-70"
                    animate={{ borderColor: ['rgba(99, 102, 241, 0.7)', 'rgba(139, 92, 246, 0.7)', 'rgba(99, 102, 241, 0.7)'] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 rounded-br-lg border-indigo-500 opacity-70"
                    animate={{ borderColor: ['rgba(99, 102, 241, 0.7)', 'rgba(139, 92, 246, 0.7)', 'rgba(99, 102, 241, 0.7)'] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />

                {/* Animated Accent Line */}
                <motion.div
                    className="absolute inset-x-0 top-28 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                    animate={{
                        backgroundImage: [
                            'linear-gradient(to right, transparent, rgba(99, 102, 241, 0.7), transparent)',
                            'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.7), transparent)',
                            'linear-gradient(to right, transparent, rgba(99, 102, 241, 0.7), transparent)'
                        ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.h2
                    className={`text-2xl md:text-3xl font-bold mb-8 "text-white" border-b-2 ${isDarkMode ? "border-indigo-600" : "border-indigo-300"} pb-4 text-center relative`}
                    whileInView={pulseAnimation}
                >
                    <span className="relative z-10 text-white">Professional Summary</span>
                    <motion.span
                        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: '200% 100%' }}
                    />
                </motion.h2>

                <div className="">
                    <AnimatePresence>
                        <motion.div
                            className={`flex flex-col md:flex-row items-start gap-4 p-4 rounded-xl  "bg-indigo-900/30" hover:  transition-all duration-300 relative overflow-hidden`}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(99, 102, 241, 0.3)" }}
                        >
                            {/* Subtle background effect */}
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 rounded-xl blur-sm"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 5, repeat: Infinity, repeatType: "reverse" }
                                }}
                            />

                            <motion.div
                                className={`p-4 rounded-full  "bg-indigo-800"  flex items-center justify-center shadow-md relative z-10`}
                                whileHover="hover"
                                variants={iconVariants}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-0"
                                    whileHover={{ opacity: 0.3, scale: 1.1 }}
                                />
                                <FaBriefcase className={isDarkMode ? "text-indigo-300" : "text-indigo-600"} size={24} />
                            </motion.div>
                            <div className="flex-1 relative z-10">
                                <h3 className={`font-semibold text-xl mb-2 ${isDarkMode ? "text-indigo-200" : "text-indigo-800"}`}>Work Experience</h3>
                                <p className="text-white mb-2">
                                    <span className="font-semibold text-white">Teaching Experience:</span> 3.2 years as Assistant Professor at Rathinam College of Arts & Science.
                                </p>
                                <p className="text-white">
                                    <span className="font-semibold text-white">Industry Experience:</span> 1.5 years as Business Development Associate at BYJUS.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className={`flex flex-col md:flex-row items-start gap-4 p-4 rounded-xl bg-purple-900/30  hover:  transition-all duration-300 relative overflow-hidden`}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(139, 92, 246, 0.3)" }}
                        >
                            {/* Subtle background effect */}
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-10 rounded-xl blur-sm"
                                animate={{
                                    rotate: [0, -360],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 6, repeat: Infinity, repeatType: "reverse" }
                                }}
                            />

                            <motion.div
                                className={`p-4 rounded-full ${isDarkMode ? "bg-purple-800" : "bg-purple-100"} flex items-center justify-center shadow-md relative z-10`}
                                whileHover="hover"
                                variants={iconVariants}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-0"
                                    whileHover={{ opacity: 0.3, scale: 1.1 }}
                                />
                                <FaBook className=" mb-2" size={24} />
                            </motion.div>
                            <div className="flex-1 relative z-10">
                                <h3 className={`font-semibold text-xl mb-2 text-gray-300`}>Research Interests</h3>
                                <p className="text-gray-300 mb-2">
                                    Artificial Intelligence, Machine Learning, Natural Language Processing, and Cloud Computing.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className={`flex flex-col md:flex-row items-start gap-4 p-4 rounded-xl bg-blue-900/30 hover:  transition-all duration-300 relative overflow-hidden`}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.3)" }}
                        >
                            {/* Subtle background effect */}
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10 rounded-xl blur-sm"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 7, repeat: Infinity, repeatType: "reverse" }
                                }}
                            />

                            <motion.div
                                className={`p-4 rounded-full ${isDarkMode ? "bg-blue-800" : "bg-blue-100"} flex items-center justify-center shadow-md relative z-10`}
                                whileHover="hover"
                                variants={iconVariants}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0"
                                    whileHover={{ opacity: 0.3, scale: 1.1 }}
                                />
                                <FaGlobe className={isDarkMode ? "text-blue-300" : "text-blue-600"} size={24} />
                            </motion.div>
                            <div className="flex-1 relative z-10">
                                <h3 className={`font-semibold text-xl mb-2 ${isDarkMode ? "text-blue-200" : "text-blue-800"}`}>Contact Information</h3>
                                <p className="text-gray-300 mb-2">
                                    <span className="font-semibold">Address:</span> 43– Venkata Krishna road, R.S Puram, Coimbatore-641002.
                                </p>
                                <p className="text-gray-300 mb-2">
                                    <span className="font-semibold">Email:</span>{" "}
                                    <motion.a
                                        href="mailto:ganapathiram9800@gmail.com"
                                        className="text-gray-300 mb-2 hover:underline hover:text-opacity-80 transition-all relative inline-block"
                                        whileHover={{
                                            textShadow: "0px 0px 8px rgba(139, 92, 246, 0.5)"
                                        }}
                                    >
                                        ganapathiram9800@gmail.com
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400"
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.a>
                                </p>
                                <p className="text-gray-300 mb-2">
                                    <span className="font-semibold">Mobile:</span>{" "}
                                    <motion.a
                                        href="tel:9677400123"
                                        className={`${isDarkMode ? "text-green-300" : "text-green-600"} hover:underline hover:text-opacity-80 transition-all relative inline-block`}
                                        whileHover={{
                                            textShadow: "0px 0px 8px rgba(16, 185, 129, 0.5)"
                                        }}
                                    >
                                        9677400123
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.a>
                                    ,{" "}
                                    <motion.a
                                        href="tel:8248935436"
                                        className={`${isDarkMode ? "text-green-300" : "text-green-600"} hover:underline hover:text-opacity-80 transition-all relative inline-block`}
                                        whileHover={{
                                            textShadow: "0px 0px 8px rgba(16, 185, 129, 0.5)"
                                        }}
                                    >
                                        8248935436
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.a>
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Decorative Particle Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-1 h-1 rounded-full bg-indigo-400 opacity-40"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{
                                y: { duration: 2 + index, repeat: Infinity, repeatType: "reverse" },
                                opacity: { duration: 3 + index, repeat: Infinity, repeatType: "reverse" },
                                delay: index * 0.5
                            }}
                        />
                    ))}
                </div>
            </motion.section >
        </div >
    )
}

export default AboutSection