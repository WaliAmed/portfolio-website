import React from "react";
import Counter from "../Counter/Counter";
import PieChart from "../Chart/PieChart";
import main from "../../assets/Images/Chart/MainCircle.svg";
import glow from "../../assets/Images/Chart/GlowyCircle.svg";
import rect from "../../assets/Images/Chart/RectangleBar.svg";

function Stats() {
  return (
    <div className="w-full flex">
      {/* LHS  */}
      <div className="w-8/12 pl-36 grid grid-cols-4 place-items-center gap-y-20">
        <Counter number={500} title={"CLIENTS"} />
        <Counter number={75} title={"LOGOS"} />
        <Counter number={45} title={"WEB DESIGNS"} />
        <Counter number={80} title={"ILLUSTRATIONS"} />
        <Counter number={60} title={"POTRAITURES"} />
        <Counter number={90} title={"SEO"} />
        <Counter number={100} title={"CALLIGRAPHY"} />
        <Counter number={30} title={"PAINTINGS"} />
      </div>

      {/* RHS  */}
      <div className="w-4/12 relative flex flex-col items-center justify-center ">
        <p className="satoshi-light text-xs absolute top-3">SUCCESS RATE</p>

        <img src={main} alt="" className="absolute z-10 w-[120px]" />
        <img src={glow} alt="" className="absolute z-0 w-[140px]" />
        <img src={rect} alt="" className="absolute z-20 top-[43px] w-[5px]" />

        <p className="counter text-[32px] text-white satoshi-bold absolute -bottom-2">
          99.98%
        </p>
      </div>
    </div>
  );
}

export default Stats;
