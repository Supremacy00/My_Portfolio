import { Link as ScrollLink } from "react-scroll";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { heroData } from "../../data";

const Hero = () => {
  const {
    heroPara,
    heroHeader1,
    heroHeader2,
    heroHeader3,
    heroPara2,
    heroBtn,
    heroImg,
  } = heroData;
  return (
    <section className="w-full px-4 bg-gray-100 mt-4 pt-24 pb-12 font-roboto lg:py-24 lg:mt-0 lg:px-6 xl:px-0 ">
      <div className="container mx-auto sm:max-w-[790px] lg:max-w-[1070px] lg:text-left md:items-center lg:flex lg:justify-between lg:items-center xl:max-w-[1300px]">
        <div className="mx-auto text-grey-900 -mt-12 lg:mt-0 ">
          <h3 className="lg:max-w-[600px]leading-[48px] md:text-[14px] lg:text-[16px] ">
            {heroPara}
          </h3>
          <h1 className="text-[45px] font-medium mt-8 leading-[55px] md:text-[40px] md:font-semibold md:leading-[52px] lg:text-[43px] lg:leading-[60px] xl:leading-[65px] xl:text-5xl">
            <span>{heroHeader1}</span>
            <span className=" text-purple-800">{heroHeader2}</span>
            <span>{heroHeader3}</span>
          </h1>
          <p className="mt-4 md:block lg:mt-6 lg:max-w-[600px] lg:text-[18px]">
            {heroPara2}
          </p>
          <ScrollLink to="contacts-section" smooth={true} duration={500}>
          <span className="">
            <button className="mt-8 rounded-[4px] bg-purple-800 py-3 px-4 text-white text-[12px] md:text-sm  md:mt-10 md:py-4 md:px-6 md:font-light md:hover:bg-purple-700">
              {heroBtn}
            </button>
          </span>
          </ScrollLink>
        </div>
        <div>
          <LazyLoadImage
            src={heroImg}
            alt=""
            className="mx-auto w-[500px] max-h-[400px] mt-8 md:w-[600px] md:max-h-[450px] md:mt-1 md:text-center lg:max-w-[485px] lg:max-h-[600px] xl:max-w-[550px] "
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
