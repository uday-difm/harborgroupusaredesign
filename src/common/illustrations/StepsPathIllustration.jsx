export const StepsPathIllustration = ({ className = '' }) => (
  <svg 
    className={className} 
    viewBox="0 0 500 150" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
  >
    <path 
      d="M50 75 C 150 20, 250 130, 350 75 S 450 130, 450 75" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeDasharray="6 6"
      strokeLinecap="round" 
    />
    <circle cx="50" cy="75" r="8" stroke="currentColor" strokeWidth="2" fill="white" />
    <circle cx="210" cy="90" r="6" stroke="currentColor" strokeWidth="2" fill="white" />
    <circle cx="350" cy="75" r="8" stroke="currentColor" strokeWidth="2" fill="white" />
    <circle cx="450" cy="75" r="8" stroke="currentColor" strokeWidth="2" fill="white" />
  </svg>
);
