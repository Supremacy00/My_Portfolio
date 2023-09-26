import { LazyLoadImage } from "react-lazy-load-image-component";
import { testimonialData } from "../../data";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className=" py-12 font-roboto lg:py-24">
      <div className=" lg:px-6 xl:px-0">
        <div className="container mx-auto px-4 sm:max-w-[825px] lg:px-0 lg:max-w-[1200px] xl:px-0 xl:max-w-[1300px]">
          <div className=" mx-auto sm:max-w-[825px] lg:max-w-[1070px] xl:max-w-[1300px]">
            <p className="text-[16px] mb-1">Clients Feedback</p>
            <h1 className="text-[28px] font-medium lg:text-[30px] xl:text-[35px]">
              Customer Testimonials
            </h1>
          </div>
          <div className="container mx-auto grid gap-8 sm:grid-cols-2  sm:max-w-[825px] lg:grid-cols-3 lg:max-w-[1070px] xl:max-w-[1300px]">
            {testimonialData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="container mx-auto text-start ring-1 ring-green-800 rounded-lg max-w-full min-h-[260px] mt-7 sm:max-w-[825px]  md:min-h-[280px]"
                >
                  <div>
                    <div className="flex justify-start text-[22px] mx-auto px-6 text-green-800 pt-8 md:w-[340px] md:px-7 lg:px-0  md:justify-start lg:max-w-[276px] xl:max-w-[1300px]">
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span className="text-gray-400">
                        <AiFillStar />
                      </span>
                    </div>
                    <div className="mx-auto text-[16px] mt-9 px-6 sm:mt-5 md:w-[340px] md:text-[16px] text-start md:mt-7 md:px-8 lg:px-0 lg:max-w-[275px] xl:max-w-[1300px] xl:px-0 xl:text-[17.5px]">
                      {item.title}
                    </div>
                  </div>
                  <div className="flex justify-start mx-auto px-6 items-center space-x-5 mt-8   sm:mt-5 md:px-0 md:w-[280px] md:mt-8 md:justify-start lg:w-[275px]  xl:w-[340px] ">
                    <LazyLoadImage
                      src={item.testImg}
                      alt=""
                      className="w-[58px] h-[58px] rounded-full cover  "
                    />
                    <div className="mx-16">
                      <h3 className="text-4 font-medium leading-6 xl:text-[17px] ">
                        {item.testHeader}
                      </h3>
                      <p className="text-start text-slate-700 lg:text-[15px] xl:text-[16px]">
                        {item.testPara}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
