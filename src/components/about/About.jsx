import { LazyLoadImage } from "react-lazy-load-image-component";
import { aboutData } from "../../data";


const About = () => {
  const { aboutImg, aboutPara, aboutHeader, aboutText } = aboutData;

  const containerStyle = {
    backgroundImage: `url(${"./images/background.png"})`, // Set the background image
    backgroundSize: 'cover', // Adjust background size as needed
    backgroundRepeat: 'no-repeat', // Adjust background repeat as needed
    width: "400px"
  };

  return (
    <div className="container mx-auto pt-12 pb-2 font-roboto px-4 sm:max-w-[825px] lg:py-16 lg:max-w-[1120px] lg:px-6 xl:px-0 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center xl:max-w-[1300px]">
      <div className="sm:max-w-[825px] md:mt-0 lg:max-w-[530px] xl:max-w-[650px]">
        <span>
          <h3 className="text-[16px] mb-1">{aboutPara}</h3>
          <h1 className="text-[28px] font-medium lg:text-[30px] xl:text-[35px]">
            {aboutHeader}
          </h1>
        </span>
        <p className="text-[17px] mt-4 md:text-start">{aboutText}</p>
      </div>
      <div style={containerStyle}>
        <LazyLoadImage
          src={aboutImg}
          loading="lazy"
          alt=""
          className="container mx-auto my-12 max-w-[500px] min-h-[300px] cover md:max-h-[450px] md:max-w-[600px] lg:h-[500px] lg:max-w-[450px] xl:max-w-[530px]"
        />
      </div>
    </div>
  );
};

export default About;
