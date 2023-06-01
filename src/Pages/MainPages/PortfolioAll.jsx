import HeadingTags from "../../Components/HeadingTags/HeadingTags";

import PortfolioCardsAll from "../../Components/Cards/PortfolioCardsAll";

import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../../Components/Buttons/Transparent";
import { useNavigate } from "react-router-dom";

// IMAGES
import patch2 from "../../assets/Images/patch2.svg";
import Branding1 from "../../assets/Images/Portfolio/Branding/Branding1.svg";
import Branding2 from "../../assets/Images/Portfolio/Branding/Branding2.svg";
import Branding3 from "../../assets/Images/Portfolio/Branding/Branding3.svg";
import Branding4 from "../../assets/Images/Portfolio/Branding/Branding4.svg";

import CIL1 from "../../assets/Images/Portfolio/CoupleIllustration/CIL1.svg";
import CIL2 from "../../assets/Images/Portfolio/CoupleIllustration/CIL2.svg";
import CIL3 from "../../assets/Images/Portfolio/CoupleIllustration/CIL3.svg";
import CIL4 from "../../assets/Images/Portfolio/CoupleIllustration/CIL4.svg";
import CIL5 from "../../assets/Images/Portfolio/CoupleIllustration/CIL5.svg";
import CIL6 from "../../assets/Images/Portfolio/CoupleIllustration/CIL6.svg";

import ILS1 from "../../assets/Images/Portfolio/Illustrations/ILS1.svg";
import ILS2 from "../../assets/Images/Portfolio/Illustrations/ILS2.svg";
import ILS3 from "../../assets/Images/Portfolio/Illustrations/ILS3.svg";
import ILS4 from "../../assets/Images/Portfolio/Illustrations/ILS4.svg";
import ILS5 from "../../assets/Images/Portfolio/Illustrations/ILS5.svg";
import ILS6 from "../../assets/Images/Portfolio/Illustrations/ILS6.svg";
import ILS7 from "../../assets/Images/Portfolio/Illustrations/ILS7.svg";
import ILS8 from "../../assets/Images/Portfolio/Illustrations/ILS8.svg";
import ILS9 from "../../assets/Images/Portfolio/Illustrations/ILS9.svg";
import ILS10 from "../../assets/Images/Portfolio/Illustrations/ILS10.svg";

import Logo1 from "../../assets/Images/Portfolio/Logos/Logo1.svg";
import Logo2 from "../../assets/Images/Portfolio/Logos/Logo2.svg";
import Logo3 from "../../assets/Images/Portfolio/Logos/Logo3.svg";
import Logo4 from "../../assets/Images/Portfolio/Logos/Logo4.svg";
import Logo5 from "../../assets/Images/Portfolio/Logos/Logo5.svg";
import Logo6 from "../../assets/Images/Portfolio/Logos/Logo6.svg";
import Logo7 from "../../assets/Images/Portfolio/Logos/Logo7.svg";

import Painting1 from "../../assets/Images/Portfolio/Painting/Painting1.svg";
import Painting2 from "../../assets/Images/Portfolio/Painting/Painting2.svg";
import Painting3 from "../../assets/Images/Portfolio/Painting/Painting3.svg";
import Painting4 from "../../assets/Images/Portfolio/Painting/Painting4.svg";
import Painting5 from "../../assets/Images/Portfolio/Painting/Painting5.svg";
import Painting6 from "../../assets/Images/Portfolio/Painting/Painting6.svg";
import Painting7 from "../../assets/Images/Portfolio/Painting/Painting7.svg";
import Painting8 from "../../assets/Images/Portfolio/Painting/Painting8.svg";
import Painting9 from "../../assets/Images/Portfolio/Painting/Painting9.svg";
import Painting10 from "../../assets/Images/Portfolio/Painting/Painting10.svg";
import Painting11 from "../../assets/Images/Portfolio/Painting/Painting11.svg";
import Painting12 from "../../assets/Images/Portfolio/Painting/Painting12.svg";
import Painting13 from "../../assets/Images/Portfolio/Painting/Painting13.svg";

import Social1 from "../../assets/Images/Portfolio/Social/Social1.svg";
import Social2 from "../../assets/Images/Portfolio/Social/Social2.svg";
import Social3 from "../../assets/Images/Portfolio/Social/Social3.svg";

import Pot1 from "../../assets/Images/Portfolio/Potraitures/Pot1.svg";
import Pot2 from "../../assets/Images/Portfolio/Potraitures/Pot2.svg";
import Pot3 from "../../assets/Images/Portfolio/Potraitures/Pot3.svg";
import Pot4 from "../../assets/Images/Portfolio/Potraitures/Pot4.svg";
import Pot5 from "../../assets/Images/Portfolio/Potraitures/Pot5.svg";
import Pot6 from "../../assets/Images/Portfolio/Potraitures/Pot6.svg";

import Web1 from "../../assets/Images/Portfolio/WebUI/Web1.svg";
import Web2 from "../../assets/Images/Portfolio/WebUI/Web2.svg";
import Web3 from "../../assets/Images/Portfolio/WebUI/Web3.svg";
import Web4 from "../../assets/Images/Portfolio/WebUI/Web4.svg";
import Web5 from "../../assets/Images/Portfolio/WebUI/Web5.svg";
import Web6 from "../../assets/Images/Portfolio/WebUI/Web6.svg";

function PortfolioAll() {
  const PortfolioCardData = [
    {
      id: "branding",
      title: "Branding & Packaging",
      img: [Branding1, Branding2, Branding3, Branding4],
    },

    {
      id: "CIL",
      title: "COUPLE ILLUSTRATIONS",
      img: [CIL1, CIL2, CIL3, CIL4, CIL5, CIL6],
    },
    {
      id: "illustrations",
      title: "ILLUSTRATIONS",
      img: [ILS1, ILS2, ILS3, ILS4, ILS5, ILS6, ILS7, ILS8, ILS9, ILS10],
    },
    {
      id: "logos",
      title: "LOGOS",
      img: [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7],
    },
    {
      id: "painting",
      title: "CALLIGRAPHY & PAINTING",
      img: [
        Painting1,
        Painting2,
        Painting3,
        Painting4,
        Painting5,
        Painting6,
        Painting7,
        Painting8,
        Painting9,
        Painting10,
        Painting11,
        Painting12,
        Painting13,
      ],
    },
    {
      id: "social",
      title: "SOCIAL MEDIA",
      img: [Social1, Social2, Social3],
    },
    {
      id: "portraiture",
      title: "POTRAITURES",
      img: [Pot1, Pot2, Pot3, Pot4, Pot5, Pot6],
    },
    {
      id: "web",
      title: "WEB DESIGN & UX/UX",
      img: [Web1, Web2, Web3, Web4, Web5, Web6],
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
          className="absolute -bottom-[65%] right-[49%] z-0 w-[55px] h-[55px]"
        />

        <img
          src={patch2}
          alt=""
          className="absolute bottom-[0%] right-[50%] z-0 w-[40px] h-[40px]"
        />
        <HeadingTags Tag={"ALL PORTFOLIO IMAGES"} />
      </div>

      <div className="w-full pl-[8%] space-x-3 flex items-center">
        <p
          onClick={() => navigate("/portfolio")}
          className="text-[10px] satoshi-regular cursor-pointer hover:underline"
        >
          PORTFOLIO
        </p>
        <p className="text-[10px] satoshi-regular">{">"}</p>
        <p className="text-[10px] satoshi-regular cursor-pointer">
          ALL PORTFOLIO IMAGES
        </p>
      </div>

      <section className="w-full pt-20 pb-10 lg:pt-20 flex flex-col items-center">
        <div className="w-10/12 flex flex-col">
          {PortfolioCardData?.map((item, index) => {
            return (
              <div key={index}>
                <PortfolioCardsAll
                  id={item.id}
                  keyy={index}
                  title={item.title}
                  image={item.img}
                />
              </div>
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
            navigate("/portfolio");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          ButtonTitle={"BACK TO ALBUMS"}
        />
      </span>
    </>
  );
}

export default PortfolioAll;
