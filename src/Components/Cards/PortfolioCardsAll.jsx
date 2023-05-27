import React from "react";

function PortfolioCardsAll({ title, image, keyy }) {
  return (
    <div className="w-full mb-[16vh]">
      <div className="w-full flex justify-between">
        <h1 className="satoshi-light ml-[1.5%]">{title}</h1>{" "}
        <p
          style={{ fontFamily: "Arial" }}
          className="text-[50px] text-gray-400/50 font-bold mr-[1%]"
        >
          {keyy + 1}
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-x-3 lg:gap-x-0 md:grid-cols-3 lg:grid-cols-4 gap-y-3 lg:gap-y-8 place-items-center place-content-start">
        {image?.map((i, index) => {
          return (
            <>
              <img key={index} src={i} alt="" className="w-[280px] h-full" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioCardsAll;
