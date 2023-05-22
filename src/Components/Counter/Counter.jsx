import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="number flex flex-col">
      <span className="satoshi-light text-xs">{title}</span>

      <span className="flex items-center text-[32px] text-white satoshi-bold">
        <CountUp
          duration={5}
          className="counter text-[32px] text-white satoshi-bold"
          end={number}
        />
        +
      </span>
    </div>
  );
}
