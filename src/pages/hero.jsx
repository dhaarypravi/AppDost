import React from 'react';

// You can define the blue color here to ensure consistency with the Navbar
// This is the blue I used in the Navbar: blue-400 (for dark backgrounds)
const PRIMARY_BLUE = 'blue-400';
// Or if you want a custom blue, define it as a string: 'rgb(59, 130, 246)'

const Hero = () => {
  // --- Text Content ---
  const headline = 'Transform Your Ideas Into Digital Reality';
  const subheading = 'Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers.';
  const buttonText = 'Start Building';
  
  // Find the 'Ideas' text to apply the orange styling
  const parts = headline.split(/(\s*Ideas\s*)/);

  return (
    // This div overlays the Spline content and centers its children (the text and button)
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      
      {/* Container for text and button */}
      <div className="max-w-4xl text-center p-6 md:p-10">
        
        {/* --- Headline --- */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
          {parts.map((part, index) => {
            if (part.trim() === 'Ideas') {
              // Apply the orange color to the word 'Ideas'
              return (
                <span key={index} className="text-blue-400">
                  {part}
                </span>
              );
            }
            // Keep other words white
            return <span key={index}>{part}</span>;
          })}
          
        </h1>

        {/* --- Subheading --- */}
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-10 mx-auto max-w-3xl">
          {subheading}
        </p>

        {/* --- Button --- */}
        <button
          className={`
            pointer-events-auto   /* Re-enable interactions for the button */
            bg-${PRIMARY_BLUE} 
            hover:bg-blue-600 
            text-white 
            font-semibold 
            py-3 
            px-8 
            rounded-lg 
            shadow-xl 
            shadow-blue-900/50 
            transition duration-300 
            transform hover:scale-105
          `}
          onClick={() => console.log('Button clicked!')} // Add your actual action here
        >
          {buttonText}
        </button>

      </div>
    </div>
  );
};

export default Hero;