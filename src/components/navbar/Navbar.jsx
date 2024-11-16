import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import Logo from "../../../public/images/0.png";
import { scrollToSection } from "../../utils/scrollNavbar";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const [navColor, setNavColor] = useState("bg-transparent");

  const changeNavColorOnScroll = () => {
    if (window.scrollY > 92) {
      setNavColor("bg-[#000]");
    } else {
      setNavColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColorOnScroll);
    return () => {
      window.removeEventListener("scroll", changeNavColorOnScroll);
    };
  }, []);
  const handleChangeMenu = () => {
    setMenu(!menu);
  };

  const handleNavigate = (id) => {
    scrollToSection(id);
  };

  return (
    <div>
      <div
        className={`flex justify-between items-center ${navColor} xl:px-10 lg:px-8 md:px-6 px-4 fixed w-full z-30`}
      >
        <div>
          <img
            src={Logo}
            alt="Logo"
            className=" w-[100px] h-[100px]  object-scale-down"
          />
        </div>
        <nav className="hidden md:inline-flex">
          <ul className="flex justify-center items-center gap-14 text-white lg:text-xl md:text-base font-semibold  ">
            <li>
              <p
                onClick={() => {
                  handleNavigate("home");
                }}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  handleNavigate("company");
                }}
              >
                How It Works?
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  handleNavigate("about");
                }}
              >
                About
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  handleNavigate("traction");
                }}
              >
                Testimonials
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  handleNavigate("contact");
                }}
              >
                Contact Us
              </p>
            </li>
          </ul>
        </nav>
        <div className="md:hidden inline-block">
          {menu ? (
            <>
              <FaLongArrowAltRight
                className="text-white text-5xl font-thin relative z-50"
                onClick={handleChangeMenu}
              />
              <nav className="">
                <ul className="text-white absolute top-8 sm:right-3 right-3 w-1/2   bg-red-500 sm:pt-0 pt-10  px-3 sm:text-2xl text-xl  font-semibold flex flex-col sm:gap-4 gap-3 rounded-lg sm:justify-center sm:py-10 pb-5 sm:items-center items-start">
                  <li>Home</li>
                  <li>How It Works?</li>
                  <li>About</li>
                  <li>Testimonials</li>
                  <li>Contact Us</li>
                </ul>
              </nav>
            </>
          ) : (
            <IoMenu
              className="text-white text-5xl"
              onClick={handleChangeMenu}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
