import React from 'react';
import { Palette, Laptop, Globe, Smartphone, Wrench, Rocket } from 'lucide-react'; 
// Install 'lucide-react' if you haven't: npm install lucide-react

// Data structure for the service cards
const servicesData = [
  {
    icon: Palette,
    title: "UI/UX Design Excellence",
    description: "Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.",
  },
  {
    icon: Laptop,
    title: "Custom Software Development",
    description: "Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence at every stage.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Developing native and cross-platform mobile apps for iOS and Android. Seamless performance and beautiful design across all devices.",
  },
  {
    icon: Wrench,
    title: "Full-Stack Development",
    description: "Providing end-to-end development expertise covering front-end interfaces, back-end logic, and database management for comprehensive solutions.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Helping businesses modernize operations, adopt cloud solutions, and integrate new technologies to drive efficiency and competitive advantage.",
  },
];

// Reusable Card Component
const ServiceCard = ({ icon: Icon, title, description }) => {
  // Use a light-blue color for the icon and subtle card hover effect
  const iconColor = 'text-blue-500'; 

  return (
    <div
      className={`
        bg-white 
        p-8 
        rounded-2xl 
        shadow-xl 
        border border-transparent 
        transition-all 
        duration-300 
        transform 
        
        // Hover Effect: Darker shadow and subtle border color change
        hover:shadow-2xl 
        hover:shadow-blue-500/30 
        hover:border-blue-500 
        hover:scale-[1.02]
        cursor-pointer
      `}
    >
      <div className={`text-4xl mb-4 ${iconColor}`}>
        {/* Render the Lucide icon component */}
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Main Section Component
function Services() {
  return (
    // Outer container: Black background, white text for section title/subtitle
    <section className="bg-black py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* --- Section Header (Centered) --- */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            {/* The briefcase icon */}
            <div className="bg-white p-3 rounded-md shadow-md">
              <Laptop size={24} className="text-gray-800" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white ml-3">
              What We Do
            </h2>
          </div>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-400">
            Our Core Expertise
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;