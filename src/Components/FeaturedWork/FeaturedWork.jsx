import web from "../../assets/Images/Website.svg";
import black from "../../assets/Images/Black.svg";
import horse from "../../assets/Images/Horse.svg";
import tiles from "../../assets/Images/Tiles.svg";
import perfume from "../../assets/Images/Perfume.svg";
import gold from "../../assets/Images/Gold.svg";
import art from "../../assets/Images/Art.svg";
import portrait from "../../assets/Images/Portrait.svg";
import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../Buttons/Transparent";

function FeaturedWork() {
  return (
    <div className="w-full pb-10 lg:py-20 flex flex-col items-center text-white">
      <h2 className="text-[30px] lg:text-[48px] uppercase">Featured Work</h2>

      <div className="w-10/12 py-10 grid grid-cols-4 relative">
        <span className="w-full">
          <img src={black} alt="" className="w-10/12" />
        </span>

        <span className="w-full row-span-2 col-span-2 flex justify-center items-start">
          <img src={web} alt="" className="w-10/12" />
        </span>

        <span className="w-full flex justify-end items-start ">
          <img src={horse} alt="" className="w-[100%]" />
        </span>

        <span className="w-full -mt-3 lg:-mt-20">
          <img src={tiles} alt="" className="" />
        </span>

        <span className="w-full mt-2 lg:mt-5 flex justify-end items-start ">
          <img src={perfume} alt="" className="w-[100%]" />
        </span>

        <span className="w-full mt-2 lg:mt-5 flex justify-end items-start ">
          <img src={gold} alt="" className="w-[100%]" />
        </span>

        <span className="w-full col-span-2 -mt-14 lg:-mt-32 flex justify-center">
          <img src={art} alt="" className="w-[90%]" />
        </span>

        <span className="w-full row-span-2 -mt-5 lg:-mt-20">
          <img src={portrait} alt="" className="w-[90%]" />
        </span>
      </div>

      <span className="flex">
        <div className="w-fit rounded-full border border-white/20 mr-3">
          <RxArrowTopRight className="m-1 text-xs" />
        </div>

        <Transparent ButtonTitle={"VIEW ALL"} />
      </span>
    </div>
  );
}

export default FeaturedWork;
