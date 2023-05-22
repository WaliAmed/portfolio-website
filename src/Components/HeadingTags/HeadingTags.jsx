import React from "react";

function HeadingTags({ Tag }) {
  return (
    <div className="w-[75%] lg:w-[56%] mt-20 border border-blue-300/30 backdrop-blur-sm bg-[#E6E6E6]/10 py-4 lg:pr-20 flex justify-center lg:justify-end items-center">
      <p className="">{Tag}</p>
    </div>
  );
}

export default HeadingTags;
