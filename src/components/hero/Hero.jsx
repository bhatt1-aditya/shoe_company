import React from "react";
import WhiteShoe from "../../../public/images/the-white-shoe-hero-image 1.png";
import background from "../../../public/images/background-road-share 1.png";
import { scrollToSection } from "../../utils/scrollNavbar";
import Traction from "../traction/Traction";
import About from "../about/About";
import Company from "../shoeCompany/Company";
import Contact from "../contactUs/Contact";

function Hero() {
  return (
    <div id="home">
      <div className="flex md:flex-row  flex-col justify-start items-center h-1/2 bg-black">
        <div className="md:w-1/2 w-full h-1/2 text-wite xl:px-10 lg:px-8 md:px-6 px-4 md:h-screen flex flex-col md:justify-center md:items-center justify-center items-start ">
          <h1 className="text-white xl:text-9xl md:text-6xl text-2xl font-bold uppercase px-10 pt-20 md:inline-block hidden">
            The
            <br />
            Shoe
            <br />
            Company
          </h1>
        </div>
        <div
          className="md:w-1/2 md:h-screen  h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('../../../public/images/background-road-share 1.png')`,
          }}
        >
          <h1 className="text-white xl:text-9xl md:text-6xl text-2xl font-bold uppercase px-10 pt-40 inline-block md:hidden ">
            The
            <br />
            Shoe
            <br />
            Company
          </h1>
          <img
            src={WhiteShoe}
            alt="white shoe"
            className="xl:px-10 lg:px-8 md:px-6 px-4 object-scale-down w-full md:top-[20%] xl:h-[600px] h-[400px] md:right-[31%] relative "
          />
        </div>
      </div>
      <Traction />
      <About />
      <Company />
      <Contact />
    </div>
  );
}

export default Hero;
