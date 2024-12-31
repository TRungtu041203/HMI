import cuongImage from "../assets/Team/cuong.jpg";
import tungImage from "../assets/Team/tung.jpg";
import minhImage from "../assets/Team/minh.jpg";
import Activity from "../assets/Gymmifyfigma/Activity.jpg";
import Analytics from "../assets/Gymmifyfigma/Analytics.jpg";
import Home from "../assets/Gymmifyfigma/Home.jpg";
import Logbook from "../assets/Gymmifyfigma/Logbook.jpg";
import Logbook1 from "../assets/Gymmifyfigma/Logbook1.jpg";
import Profile from "../assets/Gymmifyfigma/Profile.jpg";
import Workout from "../assets/Gymmifyfigma/Workout.jpg";
import Leaderboard from "../assets/Gymmifyfigma/Leaderboard.png";


import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "idea",
    title: "Project Idea",
  },
  {
    id: "process",
    title: "Design Process",
  },
  {
    id: "need",
    title: "NeedFinding",
  },
  {
    id: "prototype",
    title: "Prototype",
  },
];

export const ImgLogo = logo;
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const teamMembers = [
  {
    name: "Dinh Viet Cuong",
    studentID: "20213566",
    role: "Fitness Leader",
    description: "Cuong is a fitness enthusiast who specializes in creating user-friendly applications for fitness enthusiasts.",
    image: cuongImage,
  },
  {
    name: "Chu Quang Tung",
    studentID: "20210603",
    role: "Programming Guru",
    description: "Tung specializes in creating user-friendly applications for fitness enthusiasts.",
    image: tungImage,
  },
  {
    name: "Dao Duc Nhat Minh",
    studentID: "20213594",
    role: "Design Expert",
    description: "Minh is a design expert who specializes in creating user-friendly applications for fitness enthusiasts.",
    image: minhImage,
  }
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
    name: "TypeScript",
    icon: typescript,
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
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const lowPrototypes = [
  {
    name: "Home Page",
    description:
      "The home page serves as the central hub of the workout app, providing users with an overview of their fitness journey. It displays featured workout routines, quick access to start or resume a workout, and a summary of recent activities. Users can view personalized recommendations based on their fitness goals, favorite exercises, or current progress.",
    image: Home,
  },
  {
    name: "Logbook",
    description:
      "The logbook page acts as a detailed activity tracker, where users can log and review their workout history. It shows completed workouts, duration, exercises performed, repetitions, and sets. Users can add notes on how they felt during each session or make adjustments to future routines.",
    image: Logbook,
  },
  {
    name: "Analytics Page",
    description:
      "The analytics page provides users with in-depth insights into their fitness performance over time. Visualized through graphs and charts, users can track metrics like calories burned, workout duration, exercise frequency, and strength progression",
    image: Analytics,
  },
  {
    name: "Settings/Profile Page",
    description:
      "The settings/personal page allows users to customize their fitness profile, preferences, and workout settings. Gamification elements like badges, achievements, and leaderboards are also displayed to encourage user engagement and retention.",
    image: Profile,
  },
];
export const midPrototypes = [
  {
    name: "Home Page",
    image: logo,
  },
  {
    name: "Logbook",
    image: jobit,
  },
  {
    name: "Analytics Page",
    image: tripguide,
  },
  {
    name: "Settings/Personal Page",
    image: carrent,
  },
];
export { services, technologies, experiences, testimonials, projects };
