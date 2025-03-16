import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaGamepad } from "react-icons/fa";

// Personal Profile Data
const PersonalProfile = {
    hobbies: [
        "Playing",
        "Travelling",
        "Cricket",
        "Volunteering",
        "Cooking",
        "Gardening",
        "Listening to Music",
    ],
};

// Themes definition was missing in your original code
const themes = {
    light: {
        cardBg: "",
        text: "text-white",
    },
    dark: {
        cardBg: "bg-gray-800",
        text: "text-white",
    },
};

function HobbiesSection() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? themes.dark : themes.light;

    // Animation variants for better organization
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            y: -8,
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    // Helper function to determine icon for each hobby
    const getHobbyIcon = (hobby) => {
        switch (hobby) {
            case "Playing":
                return <FaGamepad className={`${isDarkMode ? "text-indigo-300" : "text-indigo-600"} text-lg`} />;
            case "Travelling":
                return <FaGlobe className={`${isDarkMode ? "text-indigo-300" : "text-indigo-600"} text-lg`} />;
            case "Cricket":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                        <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14.4L9.6 13L14.4 8.2L15.8 9.6L11 14.4M7.5 20.2L5.5 18L6.9 16.6L8.9 18.8L7.5 20.2M6.4 12.7L4.1 10.4L5.5 9L7.8 11.3L6.4 12.7M9 9.4L7.6 8L9.9 5.7L11.3 7.1L9 9.4M12.7 6.4L10.4 4.1L11.8 2.7L14.1 5L12.7 6.4M18 18.9L16.6 20.3L14.3 18L15.7 16.6L18 18.9M19.5 12.9L18.1 14.3L15.8 12L17.2 10.6L19.5 12.9Z" />
                    </svg>
                );
            case "Volunteering":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                        <path fill="currentColor" d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" />
                    </svg>
                );
            case "Cooking":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                        <path fill="currentColor" d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z" />
                    </svg>
                );
            case "Gardening":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                        <path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                    </svg>
                );
            case "Listening to Music":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-5 h-5 ${isDarkMode ? "text-indigo-300" : "text-indigo-600"}`}>
                        <path fill="currentColor" d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" />
                    </svg>
                );
            default:
                return <FaGamepad className={`${isDarkMode ? "text-indigo-300" : "text-indigo-600"} text-lg`} />;
        }
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="  p-4 sm:p-8">
            {/* Theme toggle button */}
            <div className="flex justify-end mb-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className={`px-4 py-2 rounded-full ${isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
                        } font-medium transition-all duration-300  `}
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </motion.button>
            </div>

            {/* Hobbies & Interests Section with enhanced animations */}
            <motion.section
                className={`p-6 sm:p-8 rounded-2xl  shadow-2xl mb-16 backdrop-blur-sm bg-opacity-90 relative overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Background decorative elements */}
                <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500 opacity-10"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500 opacity-10"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />

                <motion.h2
                    className={`text-3xl font-bold mb-8 ${theme.text} relative`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={`inline-block border-b-4 ${isDarkMode ? "border-indigo-600" : "border-indigo-400"} pb-2`}>
                        Hobbies & Interests
                    </span>
                    <motion.span
                        className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    />
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {PersonalProfile.hobbies.map((hobby) => (
                        <motion.div
                            key={hobby}
                            className={`p-5 rounded-xl 
                                flex flex-col items-center justify-center text-center   transform transition-all duration-300`}
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className={`w-16 h-16 rounded-full ${isDarkMode
                                    ? "bg-gradient-to-br from-indigo-800 to-purple-900"
                                    : "bg-gradient-to-br from-indigo-200 to-purple-100"
                                    } flex items-center justify-center mb-4  `}
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                            >
                                {getHobbyIcon(hobby)}
                            </motion.div>
                            <motion.p
                                className={`font-medium text-lg ${theme.text}`}
                                whileHover={{ scale: 1.05 }}
                            >
                                {hobby}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}

export default HobbiesSection;