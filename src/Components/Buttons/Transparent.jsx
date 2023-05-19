import React from "react";

function Transparent({ onClick, ButtonTitle, type }) {
  return (
    <button
      className={
        "text-xs lg:text-sm md:mt-0 w-fit tracking-widest satoshi-medium md:w-fit hover:underline text-white/70 md:block"
      }
      onClick={onClick}
      type={type}
    >
      {ButtonTitle}
    </button>
  );
}

export default Transparent;
