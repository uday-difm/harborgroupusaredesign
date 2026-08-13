export const NetworkMapIllustration = ({ className = '' }) => (
  <svg 
    className={className} 
    viewBox="0 0 400 400" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
  >
    <path 
      d="M100 150 L200 100 L300 200 L250 300 L150 280 Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M100 150 L300 200" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    <path 
      d="M200 100 L150 280" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    <circle cx="100" cy="150" r="6" stroke="currentColor" strokeWidth="2" fill="white" />
    <circle cx="200" cy="100" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
    <circle cx="300" cy="200" r="8" stroke="currentColor" strokeWidth="2" fill="white" />
    <circle cx="250" cy="300" r="6" stroke="currentColor" strokeWidth="2" fill="white" />
    <circle cx="150" cy="280" r="7" stroke="currentColor" strokeWidth="2" fill="white" />
  </svg>
);
