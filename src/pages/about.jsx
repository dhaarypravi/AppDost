import React from 'react';

// You can define the blue color here to ensure consistency with the Navbar
const PRIMARY_BLUE = 'blue-400';

const About = () => {
  // --- Text Content ---
  const headline = 'Trusted Partner for Complete Digital Transformation';
  const subheading = 'AppDost is your trusted partner for complete digital transformation. We are a dynamic, innovation-driven IT solutions provider specializing in turning visionary ideas into powerful, market-ready products. Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences, and create lasting digital impact.';
  
  // Find the 'Complete' text to apply the blue styling
  const parts = headline.split(/(\s*Complete\s*)/);

  return (
    // REVISED: This is now a standard, scrollable section with a black background
    // Removed: absolute inset-0 and pointer-events-none
    <section id="about" className="bg-black py-20"> 
      
      {/* Container for text: Max width, centered on screen (mx-auto) */}
      <div className="max-w-4xl text-center mx-auto p-6 md:p-10">
        
        {/* --- Headline --- */}
        {/* Adjusted size and line-height for visual impact */}
        <h2 className="text-5xl md:text-6xl font-extrabold leading-snug mb-8 text-white">
          {parts.map((part, index) => {
            if (part.trim() === 'Complete') {
              // Apply the blue color to the word 'Complete'
              return (
                <span key={index} className="text-blue-500">
                  {part}
                </span>
              );
            }
            // Keep other words white
            return <span key={index}>{part}</span>;
          })}
        </h2>

        {/* --- Subheading --- */}
        <p className="text-lg md:text-xl font-light text-gray-300 mx-auto max-w-3xl">
          {subheading}
        </p>
        
        {/* No button in the About section based on your request */}

      </div>
    </section>
  );
};

export default About;