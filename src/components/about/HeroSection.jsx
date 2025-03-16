import {
    motion,
    useTransform,
    useViewportScroll,
    useSpring,
    AnimatePresence
} from "framer-motion";
import React, { useState, useEffect } from 'react';
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function HeroSection() {
    // Color themes
    const themes = {
        light: {
            primary: "bg-white",
            text: "text-gray-800",
            accent: "bg-indigo-500",
            secondary: "bg-gray-100",
            highlight: "bg-indigo-100",
            border: "border-indigo-200",
            cardBg: "bg-white",
            buttonBg: "bg-indigo-500",
            buttonText: "text-white",
            navBg: "bg-indigo-600",
        },
        dark: {
            primary: "bg-gray-900",
            text: "text-gray-100",
            accent: "bg-indigo-600",
            secondary: "bg-gray-800",
            highlight: "bg-indigo-900",
            border: "border-indigo-800",
            cardBg: "bg-gray-800",
            buttonBg: "bg-indigo-600",
            buttonText: "text-white",
            navBg: "bg-gray-900",
        },
    };

    // Variants for staggered animations
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const [activeTab, setActiveTab] = useState("about");
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode with gradient
    const theme = isDarkMode ? themes.dark : themes.light;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Floating particles state
    const [particles, setParticles] = useState([]);

    // Generate random particles
    useEffect(() => {
        const newParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 5 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.1
        }));
        setParticles(newParticles);
    }, []);

    // Track mouse position for hover effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Springy animation for mouse-based effects
    const mouseX = useSpring(0, { stiffness: 50, damping: 10 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 10 });

    useEffect(() => {
        mouseX.set(mousePosition.x);
        mouseY.set(mousePosition.y);
    }, [mousePosition, mouseX, mouseY]);

    // Pulse animation for the name
    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
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

    return (
        <div className="w-full overflow-hidden ">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            opacity: particle.opacity
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, particle.id % 2 === 0 ? 10 : -10, 0],
                            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay
                        }}
                    />
                ))}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30" />

            {/* Hero Section */}
            <section id="about" className="relative p-20 px-6 md:px-12 lg:px-20">
                <motion.div
                    style={{ y }}
                    className="flex flex-col  md:flex-row items-center md:items-start justify-between gap-15 max-w-6xl mx-auto"
                >
                    {/* Profile Picture with enhanced animations */}
                    <motion.div
                        className="relative z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Animated rings */}
                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                key={index}
                                className={`absolute inset-0 rounded-full bg-transparent border-2 
                                ${index === 0 ? 'border-indigo-500' : index === 1 ? 'border-purple-500' : 'border-blue-500'} 
                                opacity-${30 - index * 5}`}
                                style={{
                                    margin: `-${(index + 1) * 10}px`,
                                    zIndex: -index
                                }}
                                animate={{
                                    rotate: (index % 2 === 0 ? 360 : -360),
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    rotate: { duration: 15 + index * 5, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3 + index, repeat: Infinity, repeatType: "reverse" }
                                }}
                            />
                        ))}

                        {/* Profile image container */}
                        <motion.div
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 cursor-pointer relative z-10"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setIsImageEnlarged(!isImageEnlarged)}
                            animate={isImageEnlarged ? { scale: 1.5 } : { scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="./profile.jpg" // Replace with your professional image URL
                                alt="Mr. N. Ganapathiram"
                                className="w-full h-full object-cover"
                            />

                            {/* Interactive glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/30 to-indigo-500/20"
                                style={{
                                    opacity: 0,
                                    background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.3), transparent 70%)"
                                }}
                                whileHover={{ opacity: 0.7 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 z-0 opacity-80"
                            animate={floatingAnimation}
                        />
                        <motion.div
                            className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 z-0 opacity-80"
                            animate={{
                                ...floatingAnimation,
                                transition: { ...floatingAnimation.transition, delay: 0.5 }
                            }}
                        />
                    </motion.div>

                    {/* Hero Content with enhanced animations */}
                    <motion.div
                        className="flex-1 relative z-10"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Animated highlight background */}
                        <motion.div
                            className="absolute -inset-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm z-0"
                            animate={{
                                opacity: [0.5, 0.8, 0.5],
                                scale: [1, 1.02, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />

                        {/* Name with enhanced animation */}
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-purple-300"
                                animate={pulseAnimation}
                            >
                                N. Ganapathiram
                            </motion.h1>

                            <motion.div
                                className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"
                                initial={{ width: 0 }}
                                animate={{ width: "8rem" }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            />

                            <motion.h2
                                className="text-2xl md:text-3xl font-bold mb-6 text-indigo-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                Assistant Professor | Researcher
                            </motion.h2>
                        </motion.div>

                        {/* Info card with glass effect */}
                        <motion.div
                            className="p-6 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 shadow-2xl mb-8 relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            {/* Animated gradient background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-blue-900/20 z-0"
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%']
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                style={{ backgroundSize: '200% 200%' }}
                            />

                            <p className="text-lg md:text-xl leading-relaxed text-gray-100 relative z-10">
                                <span className="font-semibold text-blue-300">
                                    Mr. N. Ganapathiram M.Sc (Ph.D)
                                </span>, an{" "}
                                <span className="font-semibold text-purple-300">
                                    Assistant Professor
                                </span>{" "}
                                and passionate educator in{" "}
                                <span className="font-semibold text-green-300">
                                    Computer Science
                                </span>
                                , with expertise in AI and Machine Learning.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-5 relative z-10">
                                {["Artificial Intelligence", "Machine Learning", "Cloud Computing", "Natural Language Processing"].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        className={`px-4 py-2 rounded-full text-sm font-medium bg-${["indigo", "purple", "blue", "green"][index]}-800/70 text-${["indigo", "purple", "blue", "green"][index]}-200 backdrop-blur-sm border border-${["indigo", "purple", "blue", "green"][index]}-700/50`}
                                        whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>


                        {/* Buttons with enhanced animations */}
                        <motion.div
                            className="flex flex-wrap gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Contact button with glow effect */}
                            <motion.a
                                href="#contact"
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium flex items-center gap-3   relative overflow-hidden group"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                variants={itemVariants}
                                onClick={() => {
                                    setActiveTab("contact");
                                    scrollToSection("contact");
                                }}
                            >
                                {/* Button glow effect */}
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/30 to-indigo-400/0"
                                    animate={{
                                        x: ["0%", "200%"],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 3,
                                        ease: "linear"
                                    }}
                                />
                                <FaEnvelope className="text-lg" />
                                <span className="relative z-10">Contact Me</span>
                            </motion.a>

                            {/* Download CV button with borders */}
                            <motion.a
                                href="#" // Replace with actual download link
                                className="px-8 py-3 rounded-full bg-transparent border-2 border-indigo-500 text-indigo-300 font-medium flex items-center gap-3 relative overflow-hidden group"
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "#a5b4fc",
                                    color: "#c7d2fe",
                                }}
                                whileTap={{ scale: 0.95 }}
                                variants={itemVariants}
                            >
                                {/* Hover effect */}
                                <motion.span
                                    className="absolute inset-0 bg-indigo-800/0 group-hover:bg-indigo-800/20"
                                    transition={{ duration: 0.3 }}
                                />
                                <FaDownload className="text-lg" />
                                <span className="relative z-10">Download CV</span>
                            </motion.a>

                            {/* Social media buttons */}
                            <motion.div
                                className="flex gap-3 ml-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.3, duration: 0.5 }}
                            >
                                {[
                                    { icon: <FaLinkedin />, color: "bg-blue-600" },
                                    { icon: <FaGithub />, color: "bg-gray-800" },
                                    { icon: <FaTwitter />, color: "bg-sky-500" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white  `}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Animated arrow */}
                        <motion.div
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-16 hidden md:block"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}

export default HeroSection;

