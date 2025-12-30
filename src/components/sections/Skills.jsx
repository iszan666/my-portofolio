import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { skills } from '../../data/content';
import Badge from '../ui/Badge';

/**
 * Skills Section - Dark theme categorized technical skills
 */
const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
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
                        Technical <span className="gradient-text">Skills</span>
                    </motion.h2>

                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-16 rounded-full"
                        variants={staggerItem}
                    />

                    {/* Skills Categories */}
                    <div className="space-y-16">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <motion.div key={category} variants={staggerItem}>
                                <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 text-center">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {skillList.map((skill) => (
                                        <Badge key={skill} category={category}>
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
