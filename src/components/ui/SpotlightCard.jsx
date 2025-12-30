import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Card with mouse-tracking spotlight effect
 */
const SpotlightCard = ({ children, className = '', hover = true }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || !hover) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        if (hover) setOpacity(1);
    };

    const handleMouseLeave = () => {
        if (hover) setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 ${className}`}
            initial="rest"
            whileHover={hover ? "hover" : "rest"}
            animate="rest"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px transition opacity-0 duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
                }}
            />

            {/* Content */}
            <div className="relative h-full">
                {children}
            </div>
        </motion.div>
    );
};

export default SpotlightCard;
