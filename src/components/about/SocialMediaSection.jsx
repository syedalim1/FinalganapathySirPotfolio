import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaSection = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check system preference for dark mode
    useEffect(() => {
        const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(darkModeQuery.matches);

        const listener = (e) => setIsDarkMode(e.matches);
        darkModeQuery.addEventListener("change", listener);
        return () => darkModeQuery.removeEventListener("change", listener);
    }, []);

    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
        }
    };

    // Gradient background with animation
    const gradientAnimation = {
        backgroundPosition: ["0% 0%", "100% 100%"],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 15,
            ease: "linear"
        }
    };

    return (
        <motion.div
            className="relative overflow-hidden rounded-3xl  mx-auto max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0  "
                animate={gradientAnimation}
            />

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white opacity-10"
                        initial={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            x: Math.random() * 100,
                            y: Math.random() * 100,
                        }}
                        animate={{
                            x: `calc(${Math.random() * 100}% + ${(Math.random() - 0.5) * 30}px)`,
                            y: `calc(${Math.random() * 100}% + ${(Math.random() - 0.5) * 30}px)`,
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <motion.section
                className="relative p-8 md:p-12 text-center z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    className="text-2xl md:text-3xl font-bold mb-8 text-white"
                    animate={{
                        textShadow: ["0 0 8px rgba(255,255,255,0.3)", "0 0 16px rgba(255,255,255,0.5)", "0 0 8px rgba(255,255,255,0.3)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    Connect With Me
                </motion.h2>

                <motion.div
                    className="flex flex-wrap justify-center gap-6 mb-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* LinkedIn */}
                    <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:text-white border border-white/20"
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
                            rotate: [0, -10, 10, -10, 0],
                        }}
                        variants={itemVariants}
                    >
                        <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:text-white border border-white/20"
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
                            rotate: [0, -10, 10, -10, 0],
                        }}
                        variants={itemVariants}
                    >
                        <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.a>

                    {/* Email */}
                    <motion.a
                        href="mailto:ganapathiram9800@gmail.com"
                        className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:text-white border border-white/20"
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
                            rotate: [0, -10, 10, -10, 0],
                        }}
                        variants={itemVariants}
                    >
                        <FaEnvelope className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.a>
                </motion.div>

                {/* Download CV button with enhanced animation */}
                <motion.a
                    href="#"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-medium gap-2 border border-white/30 hover:bg-white/30"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                        backgroundColor: "rgba(255, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    animate={pulseAnimation}
                >
                    <FaDownload className="animate-bounce" /> Download CV
                </motion.a>
            </motion.section>
        </motion.div>
    );
};

export default SocialMediaSection;