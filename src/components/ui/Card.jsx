import { motion } from 'framer-motion';
import { hoverScale } from '../../utils/animations';

/**
 * Reusable Card Component - Dark theme
 * @param {node} children - Card content
 * @param {string} className - Additional classes
 * @param {boolean} hover - Enable hover effect
 */
const Card = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 ${className}`}
            variants={hover ? hoverScale : {}}
            initial="rest"
            whileHover={hover ? "hover" : {}}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
