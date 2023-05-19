import React from "react";
import Card1 from "../Cards/Card1";
import patch2 from "../../assets/Images/patch2.svg";
import patch3 from "../../assets/Images/patch3.svg";

function OurServices() {
  return (
    <div className="w-full mt-10 lg:mt-0 flex flex-col items-center text-white">
      <h2 className="text-[30px] lg:text-[48px] uppercase">Our Services</h2>

      <div className="w-10/12 py-5 lg:py-10 relative grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-8">
        <Card1 />
        <Card1 />
        <Card1 />
        <img src={patch3} alt="" className="absolute top-[35%] left-[33%]" />
        <img src={patch2} alt="" className="absolute left-[22%]" />
        <Card1 />
        <Card1 />
        <Card1 />

        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  );
}

export default OurServices;
