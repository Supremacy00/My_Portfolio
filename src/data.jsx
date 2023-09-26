import heroImg from "/images/heroImg.jpg";
import aboutImage from "/images/aboutImage.png";
import pcard1 from "/images/pcard1.jpg";
import pcard2 from "/images/pcard2.jpg";
import pcard3 from "/images/pcard3.jpg";
import test1 from "/images/test1.jpg"
import test2 from "/images/test2.jpg"
import test3 from "/images/test3.jpg"

import { GrTechnology } from "react-icons/gr"
import { PiFileJsx} from "react-icons/pi"
import { DiPhotoshop } from "react-icons/di"
import { SiAltiumdesigner } from "react-icons/si"
import { LiaFacebookF } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


export const navData = [
  {
    navItems: "Home",
    link: "/",
    id: 1,
  },
  {
    navItems: "Projects",
    link: "projects-section",
    id: 2,
  },
  {
    navItems: "About Me",
    link: "about-section",
    id: 3,
  },
  {
    navItems: "Testimonials",
    link: "testimonials-section",
    id: 4,
  },
];

export const heroData = {
  heroPara: "Hey, I am Abdulmuqaddas",
  heroHeader1: "I create ",
  heroHeader2: "Front-End applications ",
  heroHeader3: "using React JavaScript ",
  heroPara2:
    "Front-end development, often referred to as the client side of web development, is a dynamic and creative discipline that focuses on crafting the user interface and user experience of websites and web applications.",
  heroBtn: "Get In Touch",
  heroImg: heroImg,
};

export const skillsData = [
  {
    skillHeader: "MERN Stack",
    skillPara:
      "I develop and maintain web applications using Mongo Db, React, Node and Express.",
      icon: <GrTechnology />,
    id: 1,
    cardColor: true,
  },
  {
    skillHeader: "Frontend Development",
    skillPara:
      "I create and design the user interface (UI) and user experience (UX) of websites.",
      icon: <PiFileJsx />,
    id: 2,
    cardColor: false,
  },
  {
    skillHeader: "Photoshop",
    skillPara:
      "Photoshop is an image creation, graphic design and photo editing software.",
    icon: <DiPhotoshop/>,
    id: 3,
    cardColor: false,
  },
  {
    skillHeader: "Branding & Logo",
    skillPara:
      "I create designs to help people to quickly identify their products and organization.",
      icon: <SiAltiumdesigner />,
    id: 4,
    cardColor: false,
  },
];

export const aboutData = {
  aboutImg: aboutImage,
  aboutPara: "About",
  aboutHeader: "About Me",
  aboutText:
    "I'm a passionate Front-End developer who specializes in creating dynamic and user-friendly web applications using React JavaScript. With a keen eye for design and a strong command of various technologies, I craft stunning user interfaces and ensure seamless user experiences.",
};

export const projectData = [
  {
    pCardImg: pcard1,
    proHeader: "Movie Box",
    proTxt:
      "A MovieBox to discover, explore movies, view movie details.",
    proBtn: "View Project",
    href: "https://zuri-internship-task-two-git-main-supremacy00.vercel.app/",
    id: 1,
  },
  {
    pCardImg: pcard2,
    proHeader: "Gallery App",
    proTxt:
      "A gallery app where users can view and search for their favorite image.",
    proBtn: "View Project",
    href:"https://zuri-internship-task-three-git-main-supremacy00.vercel.app/",
    id: 2,
  },
  {
    pCardImg: pcard3,
    proHeader: "My Profile",
    proTxt:
      "A very simple profile, that displays my details as a front-end developer.",
    proBtn: "View Project",
    href:"https://zuri-internship-task-one-git-main-supremacy00.vercel.app/",
    id: 3,
  },
];

export const testimonialData = [
  {
    title:
      "Abdulmuqaddas possesses a unique talent in web development and the ability to craft engaging user experiences.",
    testImg: test1,
    testHeader: "Abbas Kasim",
    testPara: "UI/UX Designer",
    id: 1,
  },
  {
    title:
      "He is an exceptional front-end developer known for his meticulous attention to detail, delivering high-quality work. .",
    testImg: test2,
    testHeader: "Ahmad Muhammad Awwal",
    testPara: "Python Developer",
    id: 2,
  },
  {
    title:
      "A valuable team member, renowned for enhancing project aesthetics through his front-end development skills.",
    testImg: test3,
    testHeader: "Jesse Onyeachu",
    testPara: "Data Analyst",
    id: 3,
  },
];

export const formData = {
  formText: "Get In Touch",
  formHeader: "Contact Me",
  formPara: "Do id sint qui voluptate laboris occaecat.",
  fName: "First Name",
  lName: "Last Name",
  eml: "Email",
  phoneN: "Phone Number",
  tArea: "Message",
  terms: "I accept the terms",
  formBtn: "Submit",
};

export const socialMediaIcons = [
  { icon: <LiaFacebookF />, id: 1 },
  { icon: <FiInstagram />, id: 2 },
  { icon: <FaTwitter />, id: 3 },
  { icon: <FaYoutube />, id: 4 },
];
