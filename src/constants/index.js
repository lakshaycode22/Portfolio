import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    sql,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    communityclassroom,
    winions,
    coolanimestore,
    reactmovies,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Winions",
      icon: winions,
      iconBg: "#1d2f45",
      date: "August 2022 - January 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Converting given Figma styles into pixel-perfect web apps and add features like sorting and filtering using React hooks"
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Community Classroom - open source contribution",
      icon: communityclassroom,
      iconBg: "#E9F2EC",
      date: "February 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback from other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lakshay genuinely surprised with his immense skill, attention to detail, and stellar work ethic. You would never know that Lakshay is a junior developer, because he delivers senior level work and is able to deliver on any ask. Employ Lakshay if you want your work done fast, correct, and with style!!",
      name: "Nicholas Hansen-Feruch",
      designation: "Founder",
      company: "Winions",
      image: "",
    },
    {
      testimonial:
        "Lakshay is an expert developer who asks little questions and get the job done right the first time! I will keep hiring him for any other projects I have, and you should too if you want quality work done quick and right!!",
      name: "Nicholas Hansen-Feruch",
      designation: "Founder",
      company: "Winions",
      image: "",
    }
  ];
  
  const projects = [
    {
      name: "Cool Anime Store",
      live_link: "https://cool-anime-store.onrender.com/",
      description:
        "A Web-based E-commerce platform that allows users to search, order, and buy anime products online from various providers, providing a convenient and efficient solution for anime needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "orange-text-gradient",
        },
      ],
      image: coolanimestore,
      source_code_link: "https://github.com/lakshaycode22/Cool-Anime-Store",
    },
    {
      name: "React Movies",
      live_link: "https://adoring-pare-20633c.netlify.app/",
      description:
        "Web application that enables users to search for movies, view estimated cast, budget, rating, plot and director. Made by using MoviesDb API",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: reactmovies,
      source_code_link: "https://github.com/lakshaycode22/React-Movie",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };