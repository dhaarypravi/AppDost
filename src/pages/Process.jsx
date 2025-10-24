import React from "react";

const steps = [
  {
    id: 1,
    title: "Discovery & Planning",
    body: "We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.",
  },
  {
    id: 2,
    title: "Design & Prototype",
    body: "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.",
  },
  {
    id: 3,
    title: "Development & Testing",
    body: "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.",
  },
  {
    id: 4,
    title: "Deployment & Support",
    body: "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-400 py-20 px-6 text-white">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Our Development Process</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          A proven methodology that ensures quality, efficiency, and client satisfaction
        </p>
        <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full opacity-80"></div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center space-x-6 bg-white text-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Step number */}
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-b from-[#00B4FF] to-[#007BFF] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
              {step.id}
            </div>

            {/* Step content */}
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}