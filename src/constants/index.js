import project1 from "/projects/NotesApp1.png";
import project2 from "/projects/WeatherApp.png";
import project3 from "/projects/Portfolio.png";
import project4 from "/projects/Battleship.png";

export const HERO_CONTENT = `I am a passionate junior full stack developer with a strong focus on building dynamic and responsive web applications. My expertise lies in front-end technologies like React and TailwindCSS, alongside back-end technologies like Node.js, Express.js, and MongoDB. I am dedicated to crafting user-friendly solutions that combine functionality with modern design to deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hi there! 👋

I'm a junior full stack developer who fell in love with coding the moment I wrote my first "Hello, World!" It’s been an incredible journey starting from the basics of HTML and CSS to building full-stack web applications with React, Node.js, and MongoDB.

Every project I’ve worked on has been a step forward, from crafting my own portfolio site to creating a nice weather app. And recently, I built a Full-Stack Notes app with React, ExpressJs and mongoDB; that allows users to create, edit, organize, and store notes digitally.

What I love most about development is bringing ideas to life and creating things that people can actually use and enjoy. I’m always eager to learn, grow, and take on new challenges. Let’s build something amazing together! 😊`;

export const PROJECTS = [
  {
    title: "Task Notes App",
    url : "",
    image: project1,
    description:
      "An Amazing Full-Stack Notes App that helps you organize and write down your ideas and tasks. With a clean, user-friendly design, it keeps everything you need in one place.",
    technologies: ["HTML", "TailwindCSS", "React","ExpressJS", "MongoDb"],
  },
  {
    title: "Weather App",
    url : "https://weather-app-react-tailwindcss.netlify.app/",
    image: project2,
    description:
      "A weather app that provides real-time weather updates and forecasts for the next few hours. It features a search bar to quickly find weather details for any city.",
    technologies: ["HTML", "CSS", "React", "Weather API"],
  },
  {
    title: "Portfolio Website",
    url : "https://mohamed-hamed-portfolio.netlify.app/",
    image: project3,
    description:
      "A personal portfolio website showcasing my projects, frameworks I learned, skills, and my contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind Css", "Framer Motion"],
  },
  {
    title: "BattleShip Game",
    url: "https://battleshipstackgame.netlify.app/",
    image: project4,
    description:
      "Created a classic Battleship game where you can play against the CPU and choose your difficulty level, all powered by JavaScript logic. Currently under development. ",
    technologies: ["HTML", "CSS", "Javascript" ],
  },
];

export const CONTACT = {
  phoneNo: "+20 1276 549 536 ",
  email: "icedraft59@gmail.com",
};
