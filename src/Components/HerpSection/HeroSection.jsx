import React from "react";

function HeroSection() {
  return (
    <div className="w-full pt-24 h-screen flex flex-col justify-center items-center text-white">
      <div className="w-10/12 h-[80%] hero-image flex justify-center items-center">
        <div className="w-10/12 lg:w-1/2 lg:h-[60%] text-[30px] lg:text-[60px] backdrop-blur-md bg-transparent p-10 text-center flex flex-col justify-center items-center">
          <h2 className="">Design, Digital Art</h2>
          <h2 className="">&</h2>
          <h2 className="">Creative services</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
