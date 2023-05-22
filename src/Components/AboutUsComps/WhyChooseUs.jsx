import React from "react";

function WhyChooseUs() {
  return (
    <div className="w-full flex justify-center">
      {/* LHS  */}
      <div className="w-1/2 leading-[50px] h-[50vh] flex flex-col justify-center items-center">
        <span>
          <h3 className=" satoshi-light text-[20px] text-start">
            Why should you
          </h3>
          <h1 className=" satoshi-light-italic text-[70px] text-start">
            choose us?
          </h1>
        </span>
      </div>

      {/* RHS  */}
      <div className="w-1/2 px-20 grid grid-cols-2 place-content-center">
        <div>
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

        <div>
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
