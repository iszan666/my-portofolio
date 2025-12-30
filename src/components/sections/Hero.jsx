import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../../utils/animations';
import { personalInfo } from '../../data/content';
import Button from '../ui/Button';

/**
 * Hero Section - Dark theme landing page hero with name, tagline, and CTAs
 */
const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black"
        >
            {/* Animated background with mesh gradient */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient orbs */}
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
                    style={{
                        background: 'radial-gradient(circle, #667eea 0%, transparent 70%)'
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-10 w-96 h-96 rounded-full blur-3xl opacity-30"
                    style={{
                        background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)'
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)'
                    }}
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, 30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            {/* Content */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={staggerItem} className="mb-8">
                    {/* Profile Image with animated glow border */}
                    <motion.div
                        className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-8 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-md opacity-75 animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
                            <img
                                src={personalInfo.profileImage}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-6 inline-block"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300">
                            👋 Welcome to my portfolio
                        </span>
                    </motion.div>

                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6">
                        Hi, I'm{' '}
                        <span className="block mt-4 gradient-text">
                            {personalInfo.name}
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    variants={staggerItem}
                >
                    {personalInfo.tagline}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    variants={staggerItem}
                >
                    <Button
                        href={personalInfo.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="bg-white text-black hover:bg-gray-200 border-0 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </Button>

                    <Button
                        href="#projects"
                        variant="primary"
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 glow-purple"
                    >
                        <span className="flex items-center gap-2">
                            View Projects
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </Button>
                    <Button
                        href="#contact"
                        variant="secondary"
                        className="bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10"
                    >
                        <span className="flex items-center gap-2">
                            Contact Me
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <a href="#about" className="text-purple-400 hover:text-purple-300 transition-colors">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
