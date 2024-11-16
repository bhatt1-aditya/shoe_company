import React from "react";
import pant from "../../../public/images/pant.png";
// import background from "../../../public/images/background.png";
function About() {
  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-2  bg-black   py-32 f justify-center items-center">
        <h1 className="text-white text-center text-4xl font-bold py-5 md:hidden block">
          About Us!
        </h1>
        <div
          className=" lg:h-[600px]  md:h-[500px] mb-10"
          style={{
            backgroundImage: `url("../../../public/images/background.png`,
          }}
        >
          <img
            src={pant}
            alt="image is missing"
            className="object-scale-down lg:h-[690px] sm:h-[590px] h-[490px] relative sm:left-[25%]  bg-cover"
          />
        </div>
        <div className=" text-white  relative  flex flex-col justify-center items-start gap-5 px-10">
          <h1 className="text-white text-center md:text-5xl sm:text-3xl text-xl font-bold py-5 hidden md:block">
            About Us!
          </h1>
          <span className="flex flex-col gap-5 xl:text-2xl lg:text-xl text-base">
            <p>
              For each one of those shoe sweethearts out there, THE SHOE COMPANY
              offer the one-shop goal to pick the correct match of footwear.
            </p>
            <p className="hidden md:block">
              Gone are the days when you needed to go from store to store to
              locate the correct style and size for yourself.
            </p>
            <p className="hidden md:block">
              At THE SHOE COMPANY, you can locate a vast accumulation of dashing
              footwear in all sizes and styles, all inside a couple of snaps.
            </p>
            <p className="">
              Simple right?Not just we are here to spare yourtime, we are
              putting forth you the most dazzling footwear alternatives from all
              the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE.
              At'Organization Name'.we offer men,ladies,and child's shoes
              perfect for any and each event.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
