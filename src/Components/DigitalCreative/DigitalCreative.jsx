import React from "react";
import logo1 from "../../assets/Images/logo1.svg";
import logo2 from "../../assets/Images/logo2.svg";
import logo3 from "../../assets/Images/logo3.svg";
import logo4 from "../../assets/Images/logo4.svg";
import logo4a from "../../assets/Images/logo4a.svg";
import logo5 from "../../assets/Images/logo5.svg";
import logo6 from "../../assets/Images/logo4.svg";
import logo6a from "../../assets/Images/logo6a.svg";
import logo7 from "../../assets/Images/logo7.svg";
import logo7a from "../../assets/Images/logo7a.svg";
import patch from "../../assets/Images/patch.svg";

function DigitalCreative() {
  return (
    <div className="w-full py-20 h-screen flex flex-col justify-center items-center text-[#E6E6E6]">
      <span className="w-full flex justify-start pl-14 relative">
        <img src={patch} alt="" className="absolute -top-14 z-0 w-36 " />
      </span>

      <div className="w-10/12 z-40  relative h-[75%] border border-blue-300/30 backdrop-blur-md bg-[#203764]/10 p-10 text-center flex flex-col justify-center space-y-10 items-center">
        <h2 className="text-[30px] lg:text-[42px] uppercase">
          Imagining the digital creative
        </h2>
        <p className="text-sm lg:text-base w-[90%] lg:w-[65%]">
          Your journey with digital solutions begins with the right tools in
          hand. Providing services from website design, logo design and
          branding, to illustrations, digital art, graphic design and social
          media outlooks.
        </p>
      </div>

      <div className="w-11/12 mt-14 gap-y-10 lg:gap-y-0 lg:mt-0 h-1/2 grid grid-cols-3 lg:grid-cols-7 place-items-center">
        <img
          style={{ boxShadow: "1px 1px 20px rgba(173, 216, 230, 0.4" }}
          className="w-16 h-16 rounded-xl "
          src={logo2}
          alt=""
        />

        <img className="w-16 h-16 " src={logo3} alt="" />

        <span className="relative flex items-center justify-center">
          <img
            style={{ boxShadow: "1px 1px 10px 3px rgba(250, 107, 82, 0.6)" }}
            className="w-16 h-16 rounded-xl border border-orange-500/40"
            src={logo4}
            alt=""
          />

          <img className="w-8 h-8 absolute" src={logo4a} alt="" />
        </span>

        <img className="w-20 h-20" src={logo1} alt="wordpress" />

        <img className="w-12 h-12" src={logo5} alt="figma" />

        <span className="relative flex items-center justify-center">
          <img
            style={{ boxShadow: "1px 1px 14px 3px rgba(250, 82, 236, 0.529)" }}
            className="w-16 h-16 rounded-xl border border-pink-500/40 shadow-lg shadow-pink-200/30"
            src={logo6}
            alt=""
          />

          <img className="w-10 h-10 absolute" src={logo6a} alt="" />
        </span>

        <span className="relative flex items-center justify-center">
          <img
            style={{ boxShadow: "1px 1px 14px 3px rgba(82, 110, 250, 0.529)" }}
            className="w-16 h-16 shadow-lg rounded-xl border border-blue-500/40 shadow-blue-200/30"
            src={logo7}
            alt=""
          />

          <img className="w-8 h-8 absolute" src={logo7a} alt="" />
        </span>
      </div>
    </div>
  );
}

export default DigitalCreative;
