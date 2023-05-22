import React from "react";
import main from "../../assets/Images/Chart/MainCircle.svg";
import glow from "../../assets/Images/Chart/GlowyCircle.svg";
import rect from "../../assets/Images/Chart/RectangleBar.svg";

function PieChart() {
  return (
    <div className="relative w-fit h-56 flex items-center justify-center">
      <img src={main} alt="" className="absolute z-10 w-[140px]" />
      <img src={glow} alt="" className="absolute z-0  w-[160px]" />
      <img src={rect} alt="" className="absolute z-20 top-[36px] w-[6px]" />
    </div>
  );
}

export default PieChart;
