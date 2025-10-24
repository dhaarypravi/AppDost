import React from "react";

// Define the navigation links for easy management
const navLinks = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Career", id: "career" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" }
];

function Navbar() {
  // Smooth scroll to section
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Use standard window.scrollTo for better control and consistency with a fixed header
      const headerOffset = 80; // Adjust this value to offset the fixed header's height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    // Outer fixed container: Fully transparent, fixed position, full width.
    // Removed 'bg-black/80 backdrop-blur-sm'
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* Inner container: Max width, centered on screen (mx-auto), uses GRID for layout */}
      <nav className="max-w-7xl mx-auto py-4 px-6 md:px-10 grid grid-cols-3 items-center">
        
        {/* === COLUMN 1: LOGO (Left) === */}
        <div className="col-span-1 flex justify-start">
          <h1 className="text-2xl font-mono font-semibold text-white">
            AppDost
          </h1>
        </div>

        {/* === COLUMN 2: NAVIGATION LINKS (Center) === */}
        <div className="col-span-1 flex justify-center">
          <ul className="flex space-x-8 text-lg items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                {/* Conditional rendering for internal scroll vs. external link */}
                {link.external ? (
                  // External Link (e.g., Contact/GitHub)
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      relative 
                      font-medium 
                      text-gray-100 
                      transition-colors 
                      duration-300
                      pb-1 
                      hover:text-blue-400 
                      
                      // Underline styles: ONLY include hover:before:w-full for hover effect
                      before:content-['']
                      before:absolute
                      before:bottom-0
                      before:left-0
                      before:h-[2px] 
                      before:bg-blue-400 
                      before:transition-all
                      before:duration-300
                      before:w-0             /* START with zero width (no underline) */
                      hover:before:w-full    /* EXPAND to full width on hover */
                    `}
                  >
                    {link.name}
                  </a>
                ) : (
                  // Internal Scroll Link (e.g., About, Career)
                  <span
                    onClick={() => handleScroll(link.id)}
                    className={`
                      relative 
                      font-medium 
                      cursor-pointer
                      text-gray-100 
                      transition-colors 
                      duration-300
                      pb-1 
                      hover:text-blue-400 
                      
                      // Underline styles: ONLY include hover:before:w-full for hover effect
                      before:content-['']
                      before:absolute
                      before:bottom-0
                      before:left-0
                      before:h-[2px] 
                      before:bg-blue-400 
                      before:transition-all
                      before:duration-300
                      before:w-0             /* START with zero width (no underline) */
                      hover:before:w-full    /* EXPAND to full width on hover */
                    `}
                  >
                    {link.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* === COLUMN 3: Placeholder (Right) === */}
        <div className="col-span-1"></div>
      </nav>
    </div>
  );
}

export default Navbar;