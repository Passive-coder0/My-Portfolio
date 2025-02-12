import project1 from "/projects/ecommerce.png";
import project2 from "/projects/plagiarism.png";
import project3 from "/projects/NotesApp1.png";
import project4 from "/projects/WeatherApp.png";
import project5 from "/projects/Portfolio.png";

export const HERO_CONTENT = `I am a passionate junior full stack developer with a strong focus on building dynamic and responsive web applications. My expertise lies in front-end technologies like React and TailwindCSS, alongside back-end technologies like Node.js, Express.js, and MongoDB. I am dedicated to crafting user-friendly solutions that combine functionality with modern design to deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hi there! 👋

I'm a junior full stack developer who fell in love with coding the moment I wrote my first "Hello, World!" It’s been an incredible journey starting from the basics of HTML and CSS to building full-stack web applications with React, Node.js, and MongoDB.

Every project I’ve worked on has been a step forward, from crafting my own portfolio site to creating a nice weather app. And recently, I built a Full-Stack Notes app with React, ExpressJs and mongoDB; that allows users to create, edit, organize, and store notes digitally.

What I love most about development is bringing ideas to life and creating things that people can actually use and enjoy. I’m always eager to learn, grow, and take on new challenges. Let’s build something amazing together! 😊`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    url : "https://e-commerce-mern-redis.netlify.app/",
    image: project1,
    description:
      "A Fully Functional Full-Stack E-Commerce With a clean, user-friendly design. Protected Authentication, Admin Dashboard to add, remove and edit products, with Featured Categories and recommended products.",
    technologies: ["HTML", "TailwindCSS", "React","ExpressJS", "MongoDb", "Redis", "Cloudinary", "Access Tokens"],
  },
  {
    title: "AI Plagiarism Detection (Hackathon Finalist)",
    url : "https://plagiarism-guard-2.netlify.app/",
    image: project2,
    description:
      "Plagiarism Guard is an AI Detection technology that allows users to know Essays Readability, AI Generated, Sources Attribution and citations. Made specifically for Professers and Students for Academic Use.",
    technologies: ["Python", "Flask API", "HTML", "TailwindCSS", "React"],
  },
  {
    title: "Task Notes App",
    url : "https://fullstacknotesapp.netlify.app/",
    image: project3,
    description:
      "An Amazing Full-Stack Notes App that helps you organize and write down your ideas and tasks. With a clean, user-friendly design, it keeps everything you need in one place.",
    technologies: ["HTML", "TailwindCSS", "React","NodeJs","ExpressJS", "MongoDb", "Access Tokens"],
  },
  {
    title: "Weather App",
    url : "https://weather-app-react-tailwindcss.netlify.app/",
    image: project4,
    description:
      "Beuatiful weather app that provides real-time weather updates and 24-Hour forecasts. It features a search bar to quickly find weather details for any city or country in the world.",
    technologies: ["HTML", "TailwindCss", "React", "Weather API"],
  },
  {
    title: "Portfolio Website",
    url : "https://mohamed-hamed-portfolio.netlify.app/",
    image: project5,
    description:
      "A personal portfolio website showcasing my projects, frameworks I learned, skills, and my contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind Css", "Framer Motion"],
  }
];

export const CONTACT = {
  phoneNo: "+20 1276 549 536 ",
  email: "icedraft59@gmail.com",
};
