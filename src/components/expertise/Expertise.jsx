import { skillsData } from "../../data";

const Expertise = () => {
  return (
    <article className="container mx-auto py-12 font-roboto text-gray-900 px-4 sm:max-w-[825px] lg:py-24 lg:px-6 xl:px-0 lg:max-w-[1121px] xl:max-w-[1300px]">
      <div className="">
        <p className="text-[16px] mb-1">My Skills</p>
        <h1 className="text-[28px] font-medium lg:text-[30px] xl:text-[35px]">
          My Expertise
        </h1>
      </div>
      <div>
        <div className=" mx-auto mt-8 grid content-center gap-8 sm:grid-cols-2 md:px-0 lg:grid-cols-3 xl:grid-cols-4 lg:mt-16  ">
          {skillsData.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className={`${
                    item.cardColor
                      ? "mx-auto pb-1 max-w-full min-h-[240px] rounded-b-[6px] rounded-t-lg bg-purple-700 md:max-w-[1000px] lg:max-w-[1070px] lg:min-h-[305px] cursor-pointer"
                      : ""
                  }`}
                >
                  <div className="mx-auto px-6 py-10 rounded-[6px] bg-gray-100 shadow-md max-w-full min-h-[240px] md:max-w-[1000px]  lg:pt-12 lg:max-w-[1070px] lg:min-h-[300px] hover:shadow-lg cursor-pointer ">
                    <div className=" bg-white shadow-sm px-3.5 py-3.5 lg:px-3.5 lg:py-3.5 rounded-md w-16 h-16 ">
                     <span className=" text-4xl "> {item.icon}</span>
                    </div>
                    <h1 className="text-[23px] font-bold mt-10 sm:mt-8 md:mt-11 xl:text-[23px] lg:mt-12 xl:mt-11">
                      {item.skillHeader}
                    </h1>
                    <p className="mt-4 text-[16px] md:text-[17px] sm:mt-3 md:mt-4 lg:mt-3 xl:mt-4">
                      {item.skillPara}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Expertise;
