import { projectData } from "../../data";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { GoHorizontalRule } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
      <article className="bg-gray-100 ">
        <div className=" mx-auto py-12 px-4 font-roboto sm:max-w-[825px] lg:max-w-[1200px] lg:py-24 lg:px-6 xl:px-0 xl:max-w-[1300px]   ">
        <div className="mx-auto sm:max-w-[825px] lg:max-w-[1070px] xl:max-w-[1300px]">
        <p className="text-[16px] mb-1">Recent Projects </p>
        <h1 className="text-[28px] lg:text-[30px] xl:text-[35px] font-medium">My Projects</h1>
      </div>
        <ul className="mx-auto grid gap-8 gap-y-16 mt-8 max-w-full text-gray-900 sm:grid-cols-2 sm:max-w-[825px] md:max-w-[1000px] lg:grid-cols-3 lg:max-w-[1070px] xl:max-w-[1300px]">
          {projectData.map((item) => {
            return (
              <div key={item.id} className="bg-slate-50 rounded-xl shadow-lg group hover:shadow-lg">
                  <LazyLoadImage loading="lazy" src={item.pCardImg} alt="" className="mx-auto object-cover cursor-pointer rounded-xl w-full max-h-[370px] sm:max-h-[230px] lg:max-h-[270px] xl:max-h-[320px] group-hover:shadow-lg"/>
                <div className="px-6 py-6">
                  <h3 className="text-[23px] mb-2 font-bold">{item.proHeader}</h3>
                  <p className="text-[17px] sm:text-[17px]">{item.proTxt}</p>
                  <span className="flex items-center gap-1 text-[16px] mt-4">
                    <Link to={item.href}><button>{item.proBtn}</button></Link>
                    <HiMiniArrowUpRight className="text-[22px] md:text-[25px]"/>
                  </span>
                </div>
              </div>
            );
          })}
        </ul>
        </div>
      </article>
  );
};

export default Projects;
