import heroImg from "./assets/images/heroImg.png";
import aboutImage from "./assets/images/aboutImage.png";
import pcard1 from "./assets/images/pcard1.jpeg";
import pcard2 from "./assets/images/pcard2.jpeg";
import pcard3 from "./assets/images/pcard3.jpeg";
import { SiAdobephotoshop } from "react-icons/si"
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
    skillHeader: "Web Development",
    skillPara:
      "Tempor anim ad esse veniam consequat do voluptate Fugiat minim pariatur exercitation tempor aliqua labore laboris.",
    id: 1,
    cardColor: true,
  },
  {
    skillHeader: "Frontend Dev",
    skillPara:
      "Tempor anim ad esse veniam consequat do voluptate Fugiat minim pariatur exercitation tempor aliqua labore laboris.",
    id: 2,
    cardColor: false,
  },
  {
    skillHeader: "UI & UX Design",
    skillPara:
      "Tempor anim ad esse veniam consequat do voluptate Fugiat minim pariatur exercitation tempor aliqua labore laboris.",
    skillIcon: <SiAdobephotoshop />,
    id: 3,
    cardColor: false,
  },
  {
    skillHeader: "Branding & Logo",
    skillPara:
      "Tempor anim ad esse veniam consequat do voluptate Fugiat minim pariatur exercitation tempor aliqua labore laboris.",
    id: 4,
    cardColor: false,
  },
];

export const aboutData = {
  aboutImg: aboutImage,
  aboutPara: "About",
  aboutHeader: "About Me",
  aboutText:
    "Tempor culpa dolor elit cillum voluptate. Lorem minim deserunt proident fugiat aliqua nulla ex ad irure dolor laborum. Aute sunt mollit elit cupidatat incididunt quis duis. Nisi duis tempor cillum exercitation fugiat incididunt ea aute non. Et veniam reprehenderit veniam labore ea velit occaecat quis. Occaecat sit proident cillum minim irure est dolore. Dolore dolore in excepteur dolor. Incididunt veniam consectetur duis consectetur. Anim pariatur cillum labore culpa. Ipsum occaecat ad aliqua magna laborum ex enim culpa proident. Laborum et labore excepteur nostrud quis cupidatat excepteur occaecat qui incididunt eiusmod.",
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
  email: "Email",
  phone: "Phone Number",
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
