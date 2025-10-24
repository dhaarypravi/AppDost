import React from 'react';

// SkillSection Component is moved inside Skill.jsx for self-containment
const SkillsSection = ({ direction = "forward" }) => {
  const skills = [
    { name: "Android", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg", link: "https://developer.android.com" },
    { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", link: "https://aws.amazon.com" },
    { name: "C", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", link: "https://www.cprogramming.com/" },
    { name: "C++", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", link: "https://www.w3schools.com/cpp/" },
    { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", link: "https://www.w3schools.com/css/" },
    { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", link: "https://www.figma.com/" },
    { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", link: "https://firebase.google.com/" },
    { name: "Flutter", logo: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg", link: "https://flutter.dev" },
    { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", link: "https://cloud.google.com" },
    { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", link: "https://git-scm.com/" },
    { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", link: "https://www.w3.org/html/" },
    { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", link: "https://www.java.com" },
    { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Kotlin", logo: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg", link: "https://kotlinlang.org" },
    { name: "Linux", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", link: "https://www.linux.org/" },
    { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", link: "https://www.mongodb.com/" },
    { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", link: "https://www.mysql.com/" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", link: "https://nodejs.org" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", link: "https://postman.com" },
    { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", link: "https://www.python.org" },
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", link: "https://reactjs.org/" },
    { name: "React Native", logo: "https://reactnative.dev/img/header_logo.svg", link: "https://reactnative.dev/" },
    { name: "TailwindCSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", link: "https://tailwindcss.com/" },
    { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", link: "https://www.typescriptlang.org/" }
  ];

  const allSkills =
    direction === "reverse"
      ? [...skills, ...skills].reverse()
      : [...skills, ...skills];

  const animationClass = direction === "reverse" ? "animate-scroll-reverse" : "animate-scroll-forward";
  
  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <div
        className={`flex gap-6 px-4 ${animationClass}`}
        style={{
          width: "max-content",
        }}
      >
        {allSkills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-900 border border-gray-700 hover:border-blue-500 transition rounded-full shadow-lg px-4 py-2 min-w-max group"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/32x32/1f2937/ffffff?text=?"; }}
            />
            <span className="text-gray-300 group-hover:text-blue-400 font-medium whitespace-nowrap">{skill.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

function Skill() {
  return (
    <>
      <style>{`
        .next-bg {
          background-color: #0d121c;
          --dot-size: 60px;
          --line-size: 1000px;
          
          background-image:
            linear-gradient(to right, #1f2937 1px, transparent 1px),
            linear-gradient(to bottom, #1f2937 1px, transparent 1px),
            radial-gradient(circle, #1f2937 1px, transparent 1px);
            
          background-size: 
            var(--line-size) 100%, 
            100% var(--line-size), 
            var(--dot-size) var(--dot-size);
        }

        @keyframes scroll-forward {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .animate-scroll-forward {
          animation: scroll-forward 60s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite;
        }
      `}</style>
      
      <section id="skills" className="w-full py-20 bg-black">
        <div className="justify-center flex-wrap flex">
          {/* Inner Card/Container */}
          {/* REMOVED: h-[700px] to allow content to dictate height */}
          <div className='w-full max-w-7xl next-bg m-4 rounded-3xl shadow-2xl shadow-blue-500/10 p-10 backdrop-blur-sm'>
            
            <h2 className="text-center text-5xl md:text-6xl font-extrabold text-white mt-10 mb-8 relative">
              <span className="text-gray-600/50 absolute inset-0 -translate-y-4 blur-sm  select-none">Our Technical Expertise</span>
              <span className="relative">Our Technical Expertise</span>
              <p className="mt-4 text-xl font-normal text-gray-400 max-w-3xl mx-auto">
                Our team possesses a deep skill set in problem-solving and software development, with expertise spanning across frontend (React, HTML, CSS, Tailwind), backend (Node.js, MongoDB), and cloud platforms (AWS, Google Cloud).
              </p>
            </h2>

            <div className='space-y-6 md:space-y-8 mt-20 mb-10'>
              <SkillsSection direction="forward" />
              <SkillsSection direction="reverse" />
              <SkillsSection direction="forward" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Skill;
