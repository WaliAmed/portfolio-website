import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import HeadingTags from "../../Components/HeadingTags/HeadingTags";
import patch2 from "../../assets/Images/patch2.svg";
import FloatingNameTag from "../../Components/FloatingNameTag/FloatingNameTag";
import PortfolioCards from "../../Components/Cards/PortfolioCards";

// IMAGES
import Branding1 from "../../assets/Images/Portfolio/Branding/Branding1.svg";
import Branding2 from "../../assets/Images/Portfolio/Branding/Branding2.svg";
import Branding3 from "../../assets/Images/Portfolio/Branding/Branding3.svg";
import CIL1 from "../../assets/Images/Portfolio/CoupleIllustration/CIL1.svg";
import CIL2 from "../../assets/Images/Portfolio/CoupleIllustration/CIL2.svg";
import CIL3 from "../../assets/Images/Portfolio/CoupleIllustration/CIL3.svg";
import ILS1 from "../../assets/Images/Portfolio/Illustrations/ILS1.svg";
import ILS2 from "../../assets/Images/Portfolio/Illustrations/ILS2.svg";
import ILS3 from "../../assets/Images/Portfolio/Illustrations/ILS3.svg";

function Portfolio() {
  const { setHeaderShow } = useContext(ThemeContext);

  const PortfolioCardData = [
    {
      title: "Branding & Packaging",
      img1: Branding1,
      img2: Branding2,
      img3: Branding3,
    },

    {
      title: "COUPLE ILLUSTRATIONS",
      img1: CIL1,
      img2: CIL2,
      img3: CIL3,
    },
    {
      title: "ILLUSTRATIONS",
      img1: ILS1,
      img2: ILS2,
      img3: ILS3,
    },
    {
      title: "LOGOS",
    },
    {
      title: "CALLIGRAPHY & PAINTING",
    },
    {
      title: "SOCIAL MEDIA",
    },
    {
      title: "POTRAITURES",
    },
    {
      title: "WEB DESIGN & UX/UX",
    },
  ];

  useEffect(() => {
    setHeaderShow(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center pt-20 text-[#E6E6E6]">
      <div className="w-full z-10 relative flex justify-center py-10">
        <img
          src={patch2}
          alt=""
          className="absolute top-[38%] left-[35%] z-0 w-[70px] h-[70px]"
        />

        <img
          src={patch2}
          alt=""
          className="absolute top-[66%] right-[20%] z-0 w-[50px] h-[50px]"
        />
        <HeadingTags Tag={"PORTFOLIO"} />
      </div>

      <div className="w-[75%] lg:w-[65%] z-30 portfolio-image h-[70vh] flex justify-center items-center">
        <div className="w-10/12 lg:w-2/3 lg:h-[60%] border border-blue-300/30 text-[35px] lg:text-[50px] backdrop-blur-md bg-transparent p-10 text-center flex flex-col justify-center items-center">
          <h2 className="">See us bring our clients'</h2>
          <h2 className="">Imagination to life</h2>
        </div>
      </div>

      <section className="w-full py-20 flex justify-center">
        <div className="w-10/12 grid grid-cols-3 gap-y-14 place-items-center">
          {PortfolioCardData?.map((item, index) => {
            return (
              <>
                <PortfolioCards
                  key={index}
                  title={item.title}
                  image1={item.img1}
                  image2={item.img2}
                  image3={item.img3}
                />
              </>
            );
          })}
        </div>
      </section>

      <div className="w-full mt-20 hidden lg:flex whitespace-nowrap space-x-5 p-3 border border-blue-300/20 backdrop-blur-lg bg-white/10 ">
        <FloatingNameTag />
      </div>
    </div>
  );
}

export default Portfolio;
