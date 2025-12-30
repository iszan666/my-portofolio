import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { projects } from '../../data/content';
import SpotlightCard from '../ui/SpotlightCard';

/**
 * Projects Section - Premium showcase with spotlight effects
 */
const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Generate unique gradients for each project based on its ID
    const getGradient = (id) => {
        const gradients = [
            'from-purple-600 to-blue-600',
            'from-cyan-500 to-blue-500',
            'from-pink-500 to-rose-500',
            'from-amber-500 to-orange-600',
            'from-emerald-500 to-teal-600',
            'from-indigo-600 to-violet-600',
        ];
        return gradients[id % gradients.length] || gradients[0];
    };

    return (
        <section id="projects" className="py-24 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                            variants={staggerItem}
                        >
                            Selected <span className="gradient-text">Work</span>
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-2xl mx-auto text-lg"
                            variants={staggerItem}
                        >
                            A collection of projects that demonstrate my passion for building robust and interactive web experiences.
                        </motion.p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={staggerItem}
                                className="h-full"
                            >
                                <SpotlightCard className="h-full flex flex-col group hover:border-purple-500/30 transition-colors">
                                    {/* Decorative Gradient Header (Abstract Thumbnail) */}
                                    <div className={`h-48 w-full bg-gradient-to-br ${getGradient(index)} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 ease-out`}>
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.5),transparent)]" />

                                        {/* Project Number */}
                                        <div className="absolute top-4 right-4 text-white/20 font-bold text-6xl select-none">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>

                                    <div className="p-8 flex-grow flex flex-col">
                                        {/* Project Title */}
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Project Description */}
                                        <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-md font-medium border border-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Project Links */}
                                        <div className="flex items-center gap-6 pt-4 mt-auto border-t border-gray-800">
                                            <a
                                                href={project.link}
                                                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white font-medium transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Live Demo
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                            <a
                                                href={project.github}
                                                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white font-medium transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub source
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
