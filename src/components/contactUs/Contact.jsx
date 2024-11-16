import React from "react";
import map from "../../../public/images/map.png";
import { FaFacebookSquare } from "react-icons/fa";
import { BsFillPauseBtnFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { TiCamera } from "react-icons/ti";
function Contact() {
  return (
    <div>
      <div className="bg-black flex md:flex-row flex-col xl:px-10 lg:px-8 md:px-6 px-4 py-10 justify-center items-center gap-5">
        <div className="w-1/2    flex flex-col justify-start items-center ">
          <h1 className="text-white lg:py-5 py-1 flex justify-center items-center lg:text-5xl md:text-4xl font-bold text-xl">
            Contact Us
          </h1>
          <p className="text-white lg:text-xl md:text-base text-sm py-3 text-start">
            THE SHOE COMPANY,
            <br />
            Dallas, Texas, Usa
            <br />
            +1 5590 1120 9910
          </p>
          <ul className="text-2xl flex gap-3 text-start">
            <li>
              <FaFacebookSquare className="bg-black text-white" />
            </li>
            <li>
              <TiCamera className="bg-black text-white" />
            </li>
            <li>
              <BsFillPauseBtnFill className="bg-black text-white" />
            </li>
            <li>
              <FaYoutube className="bg-black text-white" />
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={map}
            alt="image is missing"
            className="object-scale-down lg:h-[700px]  w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
