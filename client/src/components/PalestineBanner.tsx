import React, { useState } from 'react';

const PalestineBanner = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <a
      href="https://techforpalestine.org/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center py-1 px-3 text-sm font-medium transition-all rounded-full ${
        hovered 
          ? 'bg-gradient-to-r from-green-600 via-white to-red-600 text-black'
          : 'bg-transparent border border-primary/30 text-foreground/80 hover:border-primary'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="mr-1 text-xs">Free Palestine</span>
      <span className={`text-xs ${hovered ? '' : 'text-opacity-80'}`}>🇵🇸</span>
    </a>
  );
};

export default PalestineBanner;