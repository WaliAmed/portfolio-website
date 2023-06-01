import React, { lazy, Suspense } from "react";
import HeadingTags from "../../Components/HeadingTags/HeadingTags";

const PortfolioCards = lazy(() =>
  import("../../Components/Cards/PortfolioCards")
);

import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../../Components/Buttons/Transparent";
import { useNavigate } from "react-router-dom";

// IMAGES
import patch2 from "../../assets/Images/patch2.svg";
import Branding1 from "../../assets/Images/Portfolio/Branding/Branding1.svg";
import Branding2 from "../../assets/Images/Portfolio/Branding/Branding2.svg";
import Branding3 from "../../assets/Images/Portfolio/Branding/Branding3.svg";
import CIL1 from "../../assets/Images/Portfolio/CoupleIllustration/CIL1.svg";
import CIL2 from "../../assets/Images/Portfolio/CoupleIllustration/CIL2.svg";
import CIL3 from "../../assets/Images/Portfolio/CoupleIllustration/CIL3.svg";
import ILS1 from "../../assets/Images/Portfolio/Illustrations/ILS1.svg";
import ILS2 from "../../assets/Images/Portfolio/Illustrations/ILS2.svg";
import ILS3 from "../../assets/Images/Portfolio/Illustrations/ILS3.svg";

import Logo1 from "../../assets/Images/Portfolio/Logos/Logo1.svg";
import Logo2 from "../../assets/Images/Portfolio/Logos/Logo2.svg";
import Logo3 from "../../assets/Images/Portfolio/Logos/Logo3.svg";
import Painting1 from "../../assets/Images/Portfolio/Painting/Painting1.svg";
import Painting2 from "../../assets/Images/Portfolio/Painting/Painting2.svg";
import Painting3 from "../../assets/Images/Portfolio/Painting/Painting3.svg";
import Social1 from "../../assets/Images/Portfolio/Social/Social1.svg";
import Social2 from "../../assets/Images/Portfolio/Social/Social2.svg";
import Social3 from "../../assets/Images/Portfolio/Social/Social3.svg";
import Pot1 from "../../assets/Images/Portfolio/Potraitures/Pot1.svg";
import Pot2 from "../../assets/Images/Portfolio/Potraitures/Pot2.svg";
import Pot3 from "../../assets/Images/Portfolio/Potraitures/Pot3.svg";
import Web1 from "../../assets/Images/Portfolio/WebUI/Web1.svg";
import Web2 from "../../assets/Images/Portfolio/WebUI/Web2.svg";
import Web3 from "../../assets/Images/Portfolio/WebUI/Web3.svg";

function PortfolioMain() {
  const PortfolioCardData = [
    {
      id: "branding",
      title: "Branding & Packaging",
      img1: Branding1,
      img2: Branding2,
      img3: Branding3,
    },

    {
      id: "CIL",
      title: "COUPLE ILLUSTRATIONS",
      img1: CIL1,
      img2: CIL2,
      img3: CIL3,
    },
    {
      id: "illustrations",
      title: "ILLUSTRATIONS",
      img1: ILS1,
      img2: ILS2,
      img3: ILS3,
    },
    {
      id: "logos",
      title: "LOGOS",
      img1: Logo1,
      img2: Logo2,
      img3: Logo3,
    },
    {
      id: "painting",
      title: "CALLIGRAPHY & PAINTING",
      img1: Painting1,
      img2: Painting2,
      img3: Painting3,
    },
    {
      id: "social",
      title: "SOCIAL MEDIA",
      img1: Social1,
      img2: Social2,
      img3: Social3,
    },
    {
      id: "portraiture",
      title: "POTRAITURES",
      img1: Pot1,
      img2: Pot2,
      img3: Pot3,
    },
    {
      id: "web",
      title: "WEB DESIGN & UI/UX",
      img1: Web1,
      img2: Web2,
      img3: Web3,
    },
  ];

  let navigate = useNavigate();

  return (
    <>
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

      <section className="w-full pt-20 pb-10 lg:py-20 flex flex-col items-center">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 place-items-center">
          {PortfolioCardData?.map((item, index) => {
            return (
              <>
                <Suspense fallback={<div>Loading...</div>}>
                  <PortfolioCards
                    keyy={index}
                    id={item.id}
                    title={item.title}
                    image1={item.img1}
                    image2={item.img2}
                    image3={item.img3}
                  />
                </Suspense>
              </>
            );
          })}
        </div>
      </section>

      <span className="w-full mb-20 lg:mb-10 flex justify-center space-x-3">
        <div className="w-fit rounded-full border border-white/20 -ml-3">
          <RxArrowTopRight className="m-1 text-sm" />
        </div>
        <Transparent
          onClick={() => {
            navigate("view-all");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          ButtonTitle={"VIEW ALL"}
        />
      </span>
    </>
  );
}

export default PortfolioMain;
