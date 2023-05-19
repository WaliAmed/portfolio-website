import React from "react";
import Card2 from "../Cards/Card2";
import { TestimonialText, TestimonialText2 } from "../../TextData";
import star from "../../assets/Images/icons/star.svg";
import star2 from "../../assets/Images/icons/star2.svg";

import { AiOutlineStar } from "react-icons/ai";

function Testimonials() {
  return (
    <div className="w-full py-20 flex flex-col items-center text-white">
      <h2 className="text-[30px] lg:text-[48px] uppercase">Testimonials</h2>

      <div className="w-10/12 py-10 flex flex-col items-center lg:items-start lg:flex-row lg:justify-center z-0 lg:divide-x lg:divide-dashed lg:divide-gray-100/50">
        {/* LHS  */}
        <div className="lg:w-1/3 lg:space-y-5 relative">
          {TestimonialText?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-center lg:block lg:w-auto"
              >
                <Card2
                  title={item.title}
                  desc={item.desc}
                  auth={item.auth}
                  desig={item.desig}
                />
              </div>
            );
          })}

          <div className="hidden lg:block lg:absolute lg:top-20 lg:-right-3 space-y-28 z-20">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>

          <div className="hidden lg:block lg:absolute top-[73.5px] -right-[17px] space-y-[102.5px] z-20">
            <img src={star2} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
          </div>

          <div className="hidden lg:flex text-sm space-x-5 absolute -bottom-2 lg:-bottom-[89px] right-20">
            <img src={star} alt="" className="mr-1" />
            What our clients said
          </div>

          <span className="hidden lg:block lg:absolute -bottom-2 lg:-bottom-[89px] right-0 text-gray-400 text-xs">
            ----------
          </span>
        </div>

        {/* RHS  */}
        <div className="lg:pl-[40px] lg:w-1/3 space-y-5">
          {TestimonialText2?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-center lg:block lg:w-auto"
              >
                <Card2
                  title={item.title}
                  desc={item.desc}
                  auth={item.auth}
                  desig={item.desig}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
