import { Element } from "react-scroll";
import Hero from "../hero/Hero";
import Expertise from "../expertise/Expertise";
import About from "../about/About";
import Projects from "../projects/Projects";
import Testimonials from "../testimonials/Testimonials";
import Contacts from "../contacts/Contacts";


const Home = () => {
  return (
    <div>
      <Hero />
        <Expertise />
      <Element name="about-section">
        <About />
      </Element>
      <Element name="projects-section">
        <Projects />
      </Element>
      <Element name="testimonials-section">
        <Testimonials />
      </Element>
      <Element name="contacts-section">
        <Contacts />
      </Element>
    </div>
  );
};

export default Home;
