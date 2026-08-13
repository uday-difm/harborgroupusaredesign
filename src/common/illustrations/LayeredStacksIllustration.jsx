export const LayeredStacksIllustration = ({ className = '' }) => (
  <svg 
    className={className} 
    viewBox="0 0 300 300" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
  >
    {/* Bottom stack */}
    <rect 
      x="50" 
      y="180" 
      width="200" 
      height="60" 
      rx="30" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    <path 
      d="M50 210 C50 226.569 94.7715 240 150 240 C205.228 240 250 226.569 250 210" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    
    {/* Middle stack */}
    <rect 
      x="50" 
      y="120" 
      width="200" 
      height="60" 
      rx="30" 
      fill="white"
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    <path 
      d="M50 150 C50 166.569 94.7715 180 150 180 C205.228 180 250 166.569 250 150" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />

    {/* Top stack */}
    <rect 
      x="50" 
      y="60" 
      width="200" 
      height="60" 
      rx="30" 
      fill="white"
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    <path 
      d="M50 90 C50 106.569 94.7715 120 150 120 C205.228 120 250 106.569 250 90" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
  </svg>
);
