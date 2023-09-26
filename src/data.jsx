
import aboutImage from "/images/aboutImage.png";
import pcard1 from "/images/pcard1.jpeg";
import pcard2 from "/images/pcard2.jpeg";
import pcard3 from "/images/pcard3.jpeg";

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
    "Ad adipisicing pariatur aute consectetur ad incididunt incididunt Amet Lorem esse in pariatur deserunt aliquip dolore veniam fugiat proident consectetur.",
  heroBtn: "Get In Touch",
  heroImg: heroImg,
};

export const skillsData = [
  {
    skillHeader: "MERN Stack",
    skillPara:
      "I develop and maintain web applications using Mongo Db, React Js, Node Js and Express Js.",
      icon: <GrTechnology />,
    id: 1,
    cardColor: true,
  },
  {
    skillHeader: "Frontend Development",
    skillPara:
      "I create and design the user interface (UI) and user experience (UX) of websites and web applications.",
      icon: <PiFileJsx />,
    id: 2,
    cardColor: false,
  },
  {
    skillHeader: "Photoshop",
    skillPara:
      "Photoshop is an image creation, graphic design and photo editing software by Adobe.",
    icon: <DiPhotoshop/>,
    id: 3,
    cardColor: false,
  },
  {
    skillHeader: "Branding & Logo",
    skillPara:
      "I create designs to help people to quickly identify their products and organization, to have a unique identity",
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
    proHeader: "Angular",
    proTxt:
      "Veniam duis reprehenderit culpa sint voluptate in elit aute occaecat esse.",
    proBtn: "View Project",
    id: 1,
  },
  {
    pCardImg: pcard2,
    proHeader: "Workplace",
    proTxt:
      "Veniam duis reprehenderit culpa sint voluptate in elit aute occaecat esse.",
    proBtn: "View Project",
    id: 2,
  },
  {
    pCardImg: pcard3,
    proHeader: "Coding",
    proTxt:
      "Veniam duis reprehenderit culpa sint voluptate in elit aute occaecat esse.",
    proBtn: "View Project",
    id: 3,
  },
];

export const testimonialData = [
  {
    title:
      "Pariatur ad laboris ex voluptate sunt in sint in. Quis amet quis ullamco tempor est.Eiusmod culpa sunt sunt velit.",
    testImg: pcard3,
    testHeader: "Abbas Kasim",
    testPara: "UI/UX Designer",
    id: 1,
  },
  {
    title:
      "Pariatur ad laboris ex voluptate sunt in sint in. Quis amet quis ullamco tempor est.Eiusmod culpa sunt sunt velit.",
    testImg: pcard3,
    testHeader: "Ahmad Muhammad Awwal",
    testPara: "Python Developer",
    id: 2,
  },
  {
    title:
      "Pariatur ad laboris ex voluptate sunt in sint in. Quis amet quis ullamco tempor est.Eiusmod culpa sunt sunt velit.",
    testImg: pcard3,
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
  optn: "Choose a topic:",
  optnValue1: "Lorem",
  optnValue2: "Lorem",
  optnValue3: "Lorem",
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
