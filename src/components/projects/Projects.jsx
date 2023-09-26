import { projectData } from "../../data";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { GoHorizontalRule } from "react-icons/go";

const Projects = () => {
  return (
      <article className="container mx-auto py-12 px-4 font-roboto sm:max-w-[825px] lg:max-w-[1200px] lg:py-24 lg:px-6 xl:px-0 xl:max-w-[1300px]   ">
        <div className="mx-auto sm:max-w-[825px] lg:max-w-[1070px] xl:max-w-[1300px]">
        <p className="text-[16px] mb-1">Recent Projects </p>
        <h1 className="text-[28px] lg:text-[30px] xl:text-[35px] font-medium">My Projects</h1>
      </div>
        <ul className="mx-auto grid gap-8 mt-8 max-w-full text-gray-900 sm:grid-cols-2 sm:max-w-[825px] md:max-w-[1000px] lg:grid-cols-3 lg:max-w-[1070px] xl:max-w-[1300px]">
          {projectData.map((item) => {
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-lg group hover:shadow-xl">
                  <img src={item.pCardImg} alt="" className="mx-auto cover rounded-t-xl w-full lg:h-[210px] xl:min-h-[260px] group-hover:shadow-xl"/>
                <div className="px-6 py-6">
                  <h3 className="text-[23px] mb-2 font-bold">{item.proHeader}</h3>
                  <p className="text-[17px] sm:text-[17px]">{item.proTxt}</p>
                  <span className="flex items-center gap-1 text-[16px] mt-4">
                    <button>{item.proBtn}</button>
                    <HiMiniArrowUpRight className="text-[22px] md:text-[25px]"/>
                  </span>
                </div>
              </div>
            );
          })}
        </ul>
      </article>
  );
};

export default Projects;