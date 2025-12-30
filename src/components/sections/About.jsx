import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, staggerContainer, staggerItem } from '../../utils/animations';
import { about } from '../../data/content';

/**
 * About Section - Dark theme professional summary and highlights
 */
const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Title */}
                    <motion.h2
                        className="text-5xl md:text-6xl font-bold text-center mb-6"
                        variants={staggerItem}
                    >
                        About <span className="gradient-text">Me</span>
                    </motion.h2>

                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-12 rounded-full"
                        variants={staggerItem}
                    />

                    {/* About Content */}
                    <motion.div
                        className="max-w-4xl mx-auto"
                        variants={staggerItem}
                    >
                        <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
                            {about.description}
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            {about.highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 card-glow"
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-3xl flex-shrink-0">{highlight.split(' ')[0]}</span>
                                    <span className="text-gray-200 font-medium text-lg">
                                        {highlight.split(' ').slice(1).join(' ')}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
