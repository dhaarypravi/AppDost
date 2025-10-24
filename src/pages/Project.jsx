import React from "react";
import ProjectCard from "../components/Card";
import twc from "../assets/twc.png";
import dev from "../assets/dev.png";
import beu from "../assets/beu.png";
import deep from "../assets/deep.png";


const ProjectsSection = () => {
  const projects = [
    {
      title: "BEU Mate - Bihar Engineering",
      text: "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement prepara...",
      link: "",
      image: twc
    },
    {
      title: "Devskillquest",
      text: "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, cod...",
      link: "",
      image: dev
    },
    {
      title: "The Weddings Chapter",
      text: "A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor",
      link: "",
      image: beu,
    },
    {
      title: "Deep Learning Model",
      text: "A deep learning model for image classification that achieves state-of-the-art results on various benchmarks.",
      link: "",
      image: deep,
    }
  ];

  return (
    <div className="w-full py-20 next-bg">
      {/* Center heading */}
      <h2 className="text-center text-6xl font-bold text-white mb-6 relative">
        <span className="blur-sm text-blue-400 absolute inset-0">Our Featured Projects</span>
        <span className="relative">Our Featured Projects</span>
      </h2>

      

      {/* Scrollable cards */}
      <div className="w-full overflow-x-auto">
        <div className="flex px-4 py-6">
          {projects.map((p, i) => (
            <ProjectCard 
              key={i} 
              title={p.title} 
              text={p.text} 
              link={p.link} 
              image={p.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
