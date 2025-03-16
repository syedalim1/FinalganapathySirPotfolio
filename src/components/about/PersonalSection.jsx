import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaUser,
    FaCalendarAlt,
    FaGlobe,
    FaHeart,
    FaLanguage,
    FaGamepad,
    FaUserTie,
    FaStar,
} from "react-icons/fa";

// Personal Profile Data
const PersonalProfile = {
    name: "N.Ganapathiram",
    age: 26,
    dob: "01-06-1998",
    fathersName: "T.G Narayanan",
    mothersName: "N.Meenakshi Sundari",
    gender: "Male",
    maritalStatus: "Unmarried",
    nationality: "Indian",
    languagesKnown: ["Tamil", "English"],
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

// Icons for Profile Section
const icons = {
    name: <FaUser className="text-indigo-500" />,
    age: <FaCalendarAlt className="text-indigo-500" />,
    dob: <FaCalendarAlt className="text-indigo-500" />,
    nationality: <FaGlobe className="text-indigo-500" />,
    maritalStatus: <FaHeart className="text-indigo-500" />,
    languagesKnown: <FaLanguage className="text-indigo-500" />,
    hobbies: <FaGamepad className="text-indigo-500" />,
    fathersName: <FaUserTie className="text-indigo-500" />,
    mothersName: <FaUserTie className="text-indigo-500" />,
    gender: <FaUser className="text-indigo-500" />,
};

function PersonalSection() {
    const [floatingIndex, setFloatingIndex] = useState(null);
    const [particles, setParticles] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Generate random particles for background effect
        const newParticles = Array.from({ length: 50 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 8 + 2,
            speed: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
            color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
                Math.random() * 100 + 100
            )}, 255, ${Math.random() * 0.3 + 0.1})`,
        }));
        setParticles(newParticles);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFloatingIndex(
                Math.floor(Math.random() * Object.keys(PersonalProfile).length)
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
        },
    };

    const glowAnimation = {
        boxShadow: [
            "0 0 5px rgba(99, 102, 241, 0.5)",
            "0 0 20px rgba(99, 102, 241, 0.7)",
            "0 0 5px rgba(99, 102, 241, 0.5)",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
        },
    };

    return (
        <div className="relative overflow-hidden  rounded-3xl p-2 ">
            {/* Floating particles */}
            {particles.map((particle, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full"
                    initial={{
                        x: `${particle.x}%`,
                        y: `${particle.y}%`,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        y: [`${particle.y}%`, `${(particle.y + particle.speed * 10) % 100}%`],
                    }}
                    transition={{
                        duration: 5 / particle.speed,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                    style={{
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                    }}
                />
            ))}

            {/* Glow effect orbs */}
            <motion.div
                className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-500 blur-3xl opacity-20"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl opacity-20"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            {/* Title with animation */}
            <motion.div
                className="text-center mb-8 pt-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"
                    animate={{
                        textShadow: [
                            "0 0 7px rgba(167, 139, 250, 0.7)",
                            "0 0 10px rgba(167, 139, 250, 0.9)",
                            "0 0 7px rgba(167, 139, 250, 0.7)",
                        ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    Personal Profile
                </motion.h1>
                <motion.div
                    className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
                    animate={{ width: ["0%", "15%", "10%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.div>

            {/* Personal Details Section */}
            <motion.section
                className="  backdrop-blur-md p-8 rounded-2xl shadow-xl mb-16 mx-4 md:mx-8 lg:mx-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                
                animate="visible"
            >
                <motion.h2
                    className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 pb-2 border-b-2 border-indigo-600"
                    animate={{
                        textShadow: [
                            "0 0 3px rgba(99, 102, 241, 0.5)",
                            "0 0 7px rgba(99, 102, 241, 0.7)",
                            "0 0 3px rgba(99, 102, 241, 0.5)",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Personal Information
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(PersonalProfile).map(([key, value], index) => {
                        if (key === "skills") return null;
                        return (
                            <motion.div
                                key={key}
                                className={`flex items-center gap-3 p-4 ${floatingIndex === index ? "bg-indigo-900/50 scale-105" : ""
                                    } rounded-lg transition-all duration-300 hover:bg-gray-800 backdrop-blur-sm border border-indigo-500/30`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)" }}
                                animate={floatingIndex === index ? floatingAnimation : {}}
                            >
                                <motion.div
                                    className="p-3 rounded-full bg-indigo-900/80"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    animate={floatingIndex === index ? glowAnimation : {}}
                                >
                                    {icons[key] &&
                                        React.cloneElement(icons[key], {
                                            className: "text-indigo-300 text-xl",
                                        })}
                                </motion.div>
                                <div>
                                    <motion.span
                                        className="font-semibold capitalize text-indigo-300 block text-lg"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1.05 }}
                                    >
                                        {key.replace(/([A-Z])/g, " $1")}:
                                    </motion.span>
                                    <motion.span className="text-gray-200 ml-1">
                                        {Array.isArray(value) ? (
                                            <motion.div className="flex flex-wrap gap-1 mt-1">
                                                {value.map((item, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="px-2 py-1 bg-indigo-900/50 rounded-full text-xs border border-indigo-500/30"
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                    >
                                                        {item}
                                                    </motion.span>
                                                ))}
                                            </motion.div>
                                        ) : (
                                            value
                                        )}
                                    </motion.span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* Decorative elements */}
            <motion.div
                className="absolute top-0 right-0 w-32 h-32 opacity-30"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.3, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M50 0 L100 50 L50 100 L0 50 Z"
                        fill="none"
                        stroke="rgba(167, 139, 250, 0.7)"
                        strokeWidth="2"
                    />
                    <path
                        d="M50 20 L80 50 L50 80 L20 50 Z"
                        fill="none"
                        stroke="rgba(167, 139, 250, 0.5)"
                        strokeWidth="2"
                    />
                </svg>
            </motion.div>

            <motion.div
                className="absolute bottom-0 left-0 w-40 h-40 opacity-30"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.3, rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="2" />
                </svg>
            </motion.div>
        </div>
    );
}

export default PersonalSection;