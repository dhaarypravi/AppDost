import React, { useEffect, useState, useRef } from "react";
import { Laptop, Smartphone, Target, Rocket } from "lucide-react";

// Data for the stats cards
const statsData = [
  {
    icon: Laptop,
    value: 10,
    label: "WEB PROJECTS",
    suffix: "+",
    isAnimated: true,
  },
  {
    icon: Smartphone,
    value: 4,
    label: "ANDROID APPS",
    suffix: "+",
    isAnimated: true,
  },
  {
    icon: Target,
    value: 1,
    label: "CRM PROJECT",
    suffix: "",
    isAnimated: true,
  },
  {
    icon: Rocket,
    value: 2025,
    label: "FOUNDED YEAR",
    suffix: "",
    isAnimated: false,
  },
];

// Reusable animated counter
const AnimatedCounter = ({ from = 0, to, duration = 3000 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start;
          const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(from + progress * (to - from)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, from, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

function Stats() {
  return (
    <section id="stats" className="bg-black py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 text-gray-300">
                <stat.icon size={48} />
              </div>

              {/* Glowing Bright Number */}
              <h3
                className="text-5xl md:text-6xl font-extrabold mb-2 text-blue-500 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]"
              >
                {stat.isAnimated ? (
                  <AnimatedCounter to={stat.value} duration={3000} />
                ) : (
                  <span>{stat.value.toLocaleString()}</span>
                )}
                {stat.suffix}
              </h3>

              {/* Label */}
              <p className="text-base uppercase tracking-wider font-medium text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
