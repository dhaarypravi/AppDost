import React from 'react';
import { CheckCircle, Zap, Code, Layout, Smartphone, Palette, Briefcase, Cloud, Shield } from 'lucide-react'; 
// Added Briefcase, Cloud, Shield icons

// Data for the detailed service categories
const detailedServicesData = [
  {
    icon: Smartphone,
    title: "Android App Development",
    summary: "Custom Android applications built with the latest technologies to bring your ideas to life.",
    features: [
      "Native & Hybrid Apps",
      "Play Store Deployment",
      "Maintenance & Support"
    ],
    highlight: false 
  },
  {
    icon: Code,
    title: "Web Development",
    summary: "Responsive and scalable web applications tailored to your business needs.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Progressive Web Apps"
    ],
    highlight: true 
  },
  {
    icon: Palette,
    title: "UI/UX Development",
    summary: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
    features: [
      "User Research",
      "Wireframing",
      "Brand Identity"
    ],
    highlight: false 
  },
  // --- NEW CARDS ADDED BELOW ---
  {
    icon: Briefcase, // Icon for CRM
    title: "CRM Software",
    summary: "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
    features: [
      "Custom Development",
      "Integration Services",
      "Training & Support"
    ],
    highlight: false 
  },
  {
    icon: Cloud, // Icon for Cloud Solutions
    title: "Cloud Solutions",
    summary: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: [
      "AWS, Azure, GCP",
      "Migration Services",
      "Performance Tuning"
    ],
    highlight: false 
  },
  {
    icon: Shield, // Icon for Cybersecurity
    title: "Cybersecurity",
    summary: "Protect your business with robust security solutions and best practices.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance"
    ],
    highlight: false 
  },
];

// Reusable Card Component (remains the same)
const DetailedServiceCard = ({ icon: Icon, title, summary, features, highlight }) => {
  const blueColor = 'text-blue-400';
  const cardBg = 'bg-gray-900/50'; 

  return (
    <div
      className={`
        ${cardBg}
        p-8 
        rounded-2xl 
        shadow-xl 
        border 
        
        ${highlight ? 'border-blue-400 shadow-blue-400/30' : 'border-gray-700'} 
        
        transition-all 
        duration-300 
        transform 
        cursor-pointer

        hover:shadow-2xl 
        hover:shadow-blue-500/50 
        hover:border-blue-500 
        hover:scale-[1.02]
      `}
    >
      {/* Icon and Title */}
      <div className={`text-5xl mb-6 ${blueColor}`}>
        <Icon size={48} className="p-1 bg-white/10 rounded-lg" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-gray-400 mb-6 border-b border-gray-700 pb-6">
        {summary}
      </p>

      {/* Feature List */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300 text-base">
            <CheckCircle size={20} className={`mt-1 mr-3 flex-shrink-0 ${blueColor}`} fill="rgba(59, 130, 246, 0.1)" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Section Component (remains the same)
function DetailedServices() {
  return (
    <section className="bg-black py-20" id="detailed-services">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our Detailed Services
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We deliver end-to-end IT solutions that drive business growth and digital transformation.
          </p>
        </div>

        {/* --- Services Grid --- */}
        {/* The grid will automatically adjust to 6 cards now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServicesData.map((service, index) => (
            <DetailedServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              summary={service.summary}
              features={service.features}
              highlight={service.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailedServices;
