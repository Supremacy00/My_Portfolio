import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BsArrowUpCircleFill } from "react-icons/bs";

const ScrollToNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={`${isScrolled ? "block fixed right-6 bottom-12 md:bottom-20" : "hidden "}`}>
      <Link to="navbar" smooth={true} duration={500}>
        <div className="rounded-full bg-slate-500 h-10 w-10 text-3xl flex justify-center text-white items-center cursor-pointer">
          <BsArrowUpCircleFill />
        </div>
      </Link>
    </div>
  );
};

export default ScrollToNav;
