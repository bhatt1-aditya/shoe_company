import React from "react";
import shoe from "../../../public/images/how-it-works-image 1.png";
import arrow1 from "../../../public/images/arrow-1 1.png";
import arrow2 from "../../../public/images/arrow-2 1.png";
import arrow3 from "../../../public/images/arrow-3 1.png";
function Traction() {
  return (
    <div>
      <div className="bg-black relative flex flex-col gap-20">
        <h1 className="text-white text-center md:text-5xl sm:text-3xl text-xl font-bold py-5">
          Have they finally made the
          <br />
          perfect workout shoe?
        </h1>

        <div>
          {" "}
          <div className="absolute lg:left-[20%] lg:top-[20%] md:left-[17%] md:top-[21%] sm:left-[14%] sm:top-[18%] top-[15%] left-[5%]">
            <h1 className="uppercase text-white text-xl font-bold">The heel</h1>
            <p className="text-white">
              The heel is well-built,has
              <br />
              appropriate elevation and is
              <br />
              not too rigid .
            </p>
            <img
              src={arrow1}
              alt=""
              className="absolute object-scale-down lg:left-[25%] lg:top-[90%] sm:h-[150px] sm:w-[150px] h-[100px] w-[100px] lg:rotate-0 rotate-45 "
            />
          </div>
          <div className="">
            <img
              src={arrow2}
              alt=""
              className=" absolute object-scale-down lg:right-[34%] md:top-[35%] md:right-[28%] sm:top-[33%] sm:right-[22%] top-[45%] right-[15%]  sm:h-[150px] sm:w-[150px] h-[100px] w-[100px] sm:rotate-0 rotate-90"
            />{" "}
            <span className="absolute lg:right-[23%] sm:top-[43%] md:right-[12%] sm:right-[4%] right-[4%] top-[30%]">
              {" "}
              <h1 className="uppercase text-white text-xl font-bold  ">
                The Front
              </h1>
              <p className="text-white">
                The front is comfortable and
                <br />
                adjusts well to the shape of
                <br />
                your foot.
              </p>
            </span>
          </div>
          <div className="absolute lg:bottom-5 lg:left-[30%] md:bottom-8 md:left-[25%] sm:bottom-7 sm:left-[20%] bottom-5 left-[10%]">
            {" "}
            <h1 className="uppercase text-white text-xl font-bold  ">
              Traction
            </h1>
            <p className="text-white">
              The shoe has good traction
              <br />
              and doesn't slip easily .
            </p>
          </div>
          <img
            src={arrow3}
            alt=""
            className="sm:h-[150px] sm:w-[150px] absolute object-scale-down lg:left-[40%] lg:bottom-5 md:bottom-3 md:left-[35%]  sm:bottom-2 sm:left-[32%] left-[22%] bottom-16 h-[100px] w-[100px]"
          />
          <img
            src={shoe}
            alt="white shoe"
            className="xl:px-10 lg:px-8 md:px-6 px-4 object-scale-down w-full md:top-[20%] xl:h-[600px] h-[400px] md:right-[31%] py-20 flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Traction;
