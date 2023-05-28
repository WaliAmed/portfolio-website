import React from "react";

function TermsConditions({ setShowTermsModal, TermsText }) {
  return (
    <div
      onClick={() => setShowTermsModal(false)}
      className="w-full z-50 h-screen py-10 overflow-y-scroll flex justify-center items-center fixed top-0 left-0 bg-black/50"
    >
      <div
        className={
          "w-11/12 lg:w-[60vw] z-[60] h-screen overflow-y-scroll md:overflow-y-visible lg:h-fit flex flex-col space-y-3 px-4 lg:px-8 py-10 lg:py-10 border border-gray-200/20 rounded-sm bg-[#2c304d3c] backdrop-blur-md"
        }
      >
        <h1 className="text-2xl lg:text-[30px] tracking-widest satoshi-medium">
          TERMS & CONDITIONS
        </h1>

        <p className=" text-white pt-2 text-[16px] satoshi-light tracking-widest ">
          {TermsText[0].line1}
        </p>

        <p className=" text-white text-[16px] satoshi-light tracking-widest ">
          {TermsText[0].line2}
        </p>
      </div>
    </div>
  );
}

export default TermsConditions;
