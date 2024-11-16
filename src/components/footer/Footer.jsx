import React from "react";
import Logo from "../../../public/images/0.png";
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="xl:px-10 lg:px-8 md:px-6 px-4 bg-black text-white flex justify-center items-center gap-2">
        <img src={Logo} alt="image is missing" className="h-14 w-14" />
        <h1 className="md:text-xl text-base">Made with </h1>
        <FaHeart className="md:text-xl text-base bg-black text-white" />
        <p className="md:text-xl text-base"> By Company</p>
      </div>
    </div>
  );
}

export default Footer;
