import React from "react";

function TermsConditions({ setShowTermsModal, TermsText }) {
  return (
    <div
      onClick={() => setShowTermsModal(false)}
      className="w-full h-screen z-50 overflow-y-scroll flex justify-center items-center fixed  top-0 left-0 bg-black/50"
    >
      <div
        className={
          "w-11/12 lg:w-[60vw] h-fit space-y-5 lg:space-y-10 flex flex-col items-center justify-center px-8 py-10 border border-gray-200/20 rounded-sm bg-[#2c304d3c] backdrop-blur-md text-center leading-10"
        }
      >
        <h1 className="text-[28px] lg:text-[34px] tracking-widest satoshi-medium">
          TERMS & CONDITIONS
        </h1>

        <p className="lg:w-[80%] text-white text-center text-[16px] lg:text-[18px] satoshi-light tracking-widest leading-[28px] lg:leading-[34px]">
          {TermsText[0].line1}
        </p>
      </div>
    </div>
  );
}

export default TermsConditions;
