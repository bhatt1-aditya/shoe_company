import React from "react";
import group1 from "../../../public/images/Group 4.png";
import group2 from "../../../public/images/Group 5.png";
import group3 from "../../../public/images/Group 6.png";
function Company() {
  return (
    <div>
      <div
        className="w-full xl:px-10 lg:px-8 md:px-6 px-4  flex flex-col justify-start bg-cover"
        style={{ backgroundImage: `url("../../../public/images/bg.png` }}
      >
        <div className="text-white text-center ">
          <h1 className="lg:py-5 py-1 text-center flex justify-center items-center lg:text-5xl md:text-4xl font-bold text-xl">
            What People are saying about
            <br /> THE SHOE COMPANY?
          </h1>
        </div>
        <div className="flex  md:flex-row flex-col justify-between items-center sm:gap-5 gap-2 md:pt-5 pt-2 pb-10">
          <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center text-center">
            <img
              src={group3}
              alt="image is missing"
              className="lg:h-[300px] md:h-[200px] lg:w-[300px] md:w-[200px]  h-[100px] w-[100px]"
            />
            <p className="text-white lg:text-xl md:text-base text-sm">
              "Looking for shoes that are build
              <br /> just for you? THE SHOE <br />
              COMPANY is the way to go. Love
              <br /> the design and build quality.""
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center text-center">
            <img
              src={group1}
              alt="image is missing"
              className="lg:h-[300px] md:h-[200px] lg:w-[300px] md:w-[200px] h-[100px] w-[100px]"
            />
            <p className="text-white lg:text-xl md:text-base text-sm">
              "I Love the shoes, the quality,and
              <br /> everything. They are worth the
              <br />
              investment!"
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center text-center">
            <img
              src={group2}
              alt="image is missing"
              className="lg:h-[300px] md:h-[200px] lg:w-[300px] md:w-[200px] h-[100px] w-[100px]"
            />
            <p className="text-white lg:text-xl md:text-base text-sm">
              "They make the best and forever <br />
              lasting shoes.Superb fit and
              <br />
              comfort is literally the next level.
              <br /> Much recommended!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
