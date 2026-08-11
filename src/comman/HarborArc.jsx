import React from 'react';
import { motion } from 'framer-motion';

export const HarborArc = ({ position = 'bottomRight', className = '', parallaxY }) => {
    const posClass = position === 'bottomRight' 
        ? 'bottom-0 right-0 translate-x-1/3 translate-y-1/3' 
        : 'top-0 left-0 -translate-x-1/3 -translate-y-1/3 rotate-180';

    return (
        <motion.svg 
            className={`absolute z-0 opacity-40 text-navy-200 pointer-events-none ${posClass} ${className}`}
            style={parallaxY ? { y: parallaxY } : {}}
            width="600" 
            height="600" 
            viewBox="0 0 600 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path d="M600 0C268.629 0 0 268.629 0 600" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </motion.svg>
    );
};
