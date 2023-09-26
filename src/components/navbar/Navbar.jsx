import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navData } from "../../data"; 
import { HiMenuAlt3 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${isOpen && "fixed top-0 right-0 z-50 left-0 bg-white h-[58px]"}  lg:pb-[20px] lg:px-6`}>
      <div className="container mx-auto text-[20px] font-roboto sm:max-w-[1300px] lg:flex lg:justify-between lg:items-center lg:text-[16px] lg:py-[2px] lg:max-w-[1070px] xl:max-w-[1300px]  ">
        <div className="flex justify-between  mx-4 pt-4 text-[19px] lg:mx-0 lg:text-[18px]">
          <RouterLink to="/"> 
            <h1 className="text-purple-700 font-bold cursor-pointer">
              Abdul<span>Muqaddas</span>
            </h1>
          </RouterLink>
          <span
            className={`${isOpen ? "hidden" : "text-[30px]"} lg:hidden cursor-pointer`}
            onClick={handleMenu}
          >
            <HiMenuAlt3 />
          </span>
        </div>
        <div
          className={`${
            isOpen
              ? "pt-36 pl-4 pt- bg-gray-100 h-screen absolute top-0 w-full lg:hidden"
              : "hidden"
          } lg:block`}
        >
          <span
            className={`${"absolute top-6 right-6 text-3xl mb-8 lg:hidden"}`}
            onClick={handleMenu}
          >
            <IoMdClose />
          </span>
          <ul className="lg:flex justify-center lg:gap-8 lg:mt-4 lg:font-light">
            {navData.map((item) => {
              if (item.link === "home") {
                return (
                  <li key={item.id} className="py-4 md:hover:text-gray-600 text-center cursor-pointer">
                    <RouterLink to={item.link}>{item.navItems}</RouterLink>
                  </li>
                );
              } else {
               
                return (
                  <li key={item.id} className="py-4 md:hover:text-gray-600 text-center cursor-pointer">
                    <ScrollLink to={item.link} smooth={true} duration={500} onClick={handleCloseNavbar}>
                      {item.navItems}
                    </ScrollLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div>
          <ScrollLink to="contacts-section" smooth={true} duration={500}>
            <button className="bg-purple-100 hidden rounded-lg py-2 px-4 mt-4 font-bold text-[18px] relative group cursor-pointer lg:hover:text-white  lg:duration-500 lg:delay-200 lg:ease lg:block lg:font-light lg:text-[16px] lg:bg-transparent lg:ring-1 lg:ring-purple-700 lg:rounded-[4px]  lg:text-purple-700 lg:py-[13px] lg:px-[22px]">
              <span className="absolute rounded left-0 top-0 w-0 h-full transition-all lg:bg-purple-800  group-hover:w-full group-hover:left-0 duration-500 delay-200 ease"></span>
              <span className="relative">Contact Me</span>
            </button>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
