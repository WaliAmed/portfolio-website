import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import FloatingNameTag from "../../Components/FloatingNameTag/FloatingNameTag";
import { Outlet } from "react-router-dom";

function Portfolio() {
  const { setHeaderShow } = useContext(ThemeContext);

  useEffect(() => {
    setHeaderShow(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center pt-20 text-[#E6E6E6]">
      <Outlet />

      <div className="w-full mt-20 hidden lg:flex whitespace-nowrap space-x-5 p-3 border border-blue-300/20 backdrop-blur-lg bg-white/10 ">
        <FloatingNameTag />
      </div>
    </div>
  );
}

export default Portfolio;
