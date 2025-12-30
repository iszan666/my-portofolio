import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, staggerContainer, staggerItem } from '../../utils/animations';
import { experience } from '../../data/content';

/**
 * Experience Section - Vertical timeline of work history
 */
const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Title */}
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-6"
                        variants={staggerItem}
                    >
                        My <span className="gradient-text">Experience</span>
                    </motion.h2>

                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-16 rounded-full"
                        variants={staggerItem}
                    />

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-700" />

                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`relative flex items-center justify-between mb-12 md:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                                    }`}
                                variants={staggerItem}
                            >
                                {/* Spacer for desktop layout */}
                                <div className="hidden md:block w-5/12" />

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-gray-900 bg-purple-600 shadow-lg glow-purple z-10 box-content" />

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 w-full md:w-5/12">
                                    <motion.div
                                        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 card-glow"
                                        whileHover={{ y: -5 }}
                                    >
                                        <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-500/30">
                                            {item.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                                        <h4 className="text-purple-400 font-medium mb-3">{item.company}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
