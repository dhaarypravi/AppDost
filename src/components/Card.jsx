import React from "react";

const ProjectCard = ({ title, text, link, image }) => {
  return (
    <div className="w-[400px] h-[450px] bg-[#1e1e1e] rounded-xl p-4 mx-2 flex flex-col items-center 
                    shadow-lg shadow-white/10 transform transition-all duration-500 hover:scale-105 
                    hover:-translate-y-3 hover:rotate-1 relative overflow-hidden group">
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover rounded-lg mb-4" 
      />

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4 text-center px-2 line-clamp-4">{text}</p>

      {/* Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 
                   text-white text-sm px-4 py-2 rounded-md transition w-full text-center shadow-md"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
