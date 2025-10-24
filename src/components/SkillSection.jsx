import React from "react";

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

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex gap-6 px-4 ${direction === "reverse" ? "animate-scroll-reverse" : "animate-scroll-forward"}`}
        style={{
          width: "max-content"
        }}
      >
        {allSkills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-full shadow-lg px-4 py-2 min-w-max"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-black font-medium">{skill.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
