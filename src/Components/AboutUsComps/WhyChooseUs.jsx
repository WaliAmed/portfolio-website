import React from "react";

function WhyChooseUs() {
  return (
    <div className="w-full pb-20 lg:pb-0 flex flex-col items-center lg:flex-row lg:justify-center">
      {/* LHS  */}
      <div className="w-full lg:w-1/2 px-5 lg:px-0 leading-[50px] h-[30vh] lg:h-[50vh] flex flex-col justify-center items-center">
        <span>
          <h3 className=" satoshi-light text-[16px] lg:text-[20px] text-start">
            Why should you
          </h3>
          <h1 className=" satoshi-light-italic text-[64px] lg:text-[70px] text-start">
            choose us?
          </h1>
        </span>
      </div>

      {/* RHS  */}
      <div className="w-full lg:w-1/2 px-5 lg:px-20 grid grid-cols-1 gap-y-3 lg:gap-y-0 lg:grid-cols-2 place-items-center lg:place-content-center">
        <div className="w-full px-10 lg:w-fit lg:px-0">
          <ul className="list-disc space-y-3 text-sm">
            <li className="satoshi-light uppercase tracking-widest pl-2">
              Effective communication
            </li>
            <li className="satoshi-light uppercase tracking-widest pl-2">
              Friendly team interactions
            </li>
            <li className="satoshi-light uppercase tracking-widest pl-2">
              Client-centered designs
            </li>
          </ul>
        </div>

        <div className="w-full px-10 lg:w-fit lg:px-0">
          <ul className="list-disc space-y-3 text-sm">
            <li className="satoshi-light uppercase tracking-widest pl-2">
              Timely deliverance
            </li>
            <li className="satoshi-light uppercase tracking-widest pl-2">
              Easy transactions
            </li>
            <li className="satoshi-light uppercase tracking-widest pl-2">
              Flexible packages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
