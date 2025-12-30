import { motion } from 'framer-motion';
import { buttonHover } from '../../utils/animations';

/**
 * Reusable Button Component
 * @param {string} variant - 'primary' or 'secondary'
 * @param {string} children - Button text
 * @param {function} onClick - Click handler
 * @param {string} href - Optional link (if button is a link)
 * @param {string} className - Additional classes
 */
const Button = ({
    variant = 'primary',
    children,
    onClick,
    href,
    className = '',
    ...props
}) => {
    const baseClasses = "px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center";

    const variantClasses = {
        primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl",
        secondary: "bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 shadow-md hover:shadow-lg",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={classes}
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
