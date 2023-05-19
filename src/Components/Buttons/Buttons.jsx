import React from "react";

function Buttons({ onClick, ButtonTitle, type }) {
  return (
    <button
      style={{ fontFamily: "Satoshi-Regular" }}
      className={
        "py-2 px-6 mt-5 text-sm md:mt-0 w-fit md:w-fit bg-white text-black md:block"
      }
      onClick={onClick}
      type={type}
    >
      {ButtonTitle}
    </button>
  );
}

export default Buttons;
