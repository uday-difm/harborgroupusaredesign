import React from 'react';

export const SectionGlow = ({ position = 'topLeft', className = '' }) => {
    const posClass = position === 'topLeft' ? 'top-0 left-0' : 'bottom-0 right-0';
    return (
        <div 
            className={`absolute z-0 pointer-events-none ${posClass} ${className}`}
            style={{
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(26,44,107,0.15) 0%, rgba(26,44,107,0) 70%)',
                transform: position === 'topLeft' ? 'translate(-30%, -30%)' : 'translate(30%, 30%)'
            }}
            aria-hidden="true"
        />
    );
};
