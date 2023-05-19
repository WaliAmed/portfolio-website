import heart from "../../assets/Images/icons/Heart.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper";

export default function FloatingNameTag() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        freeMode={true}
        Autoplay={true}
        modules={[FreeMode, Autoplay]}
        className=""
      >
        <SwiperSlide className="">
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>
        <SwiperSlide className="">
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm ">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm ">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm ">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm ">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm ">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm ">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm ">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <span className="flex space-x-3 text-white/70 cursor-pointer">
            <h2 className="font-serif font-semibold text-sm ">IMAN ANIYA</h2>
            <span className="flex space-x-1">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </span>
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
