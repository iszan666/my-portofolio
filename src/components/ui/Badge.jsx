import { motion } from 'framer-motion';

/**
 * Reusable Badge Component for skills - Dark theme
 * @param {string} children - Badge text
 * @param {string} category - Skill category for color coding
 */
const Badge = ({ children, category }) => {
    const colors = {
        Frontend: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/50 hover:border-cyan-400',
        Backend: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 border-emerald-500/50 hover:border-emerald-400',
        Tools: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/50 hover:border-purple-400',
    };

    return (
        <motion.span
            className={`px-5 py-3 rounded-full text-sm font-medium border backdrop-blur-sm ${colors[category] || 'bg-gray-800/50 text-gray-300 border-gray-700'} 
        transition-all duration-300 cursor-default`}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.span>
    );
};

export default Badge;
