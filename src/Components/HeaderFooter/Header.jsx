import { useEffect, useState } from "react";
import "../../App.css";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import { MdClose } from "react-icons/md";
import ALeft from "../../assets/Images/logo/ALeft.svg";
import white_logo from "../../assets/Images/logo/WhiteFullLogo.svg";
import ARight from "../../assets/Images/logo/ARight.svg";

function Header() {
  const [Menu, setMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div
      style={{ fontFamily: "Satoshi-Regular" }}
      className={
        "w-full h-[100px] text-white/80 flex justify-center -mb-32 z-50"
      }
    >
      <div className="w-[90%] h-full flex items-center justify-between py-1">
        {/* LOGO MOBILE  */}
        <span
          onClick={() => navigate("/")}
          className="self-center block lg:hidden cursor-pointer"
        >
          <span className="absolute flex top-8">
            <img src={ALeft} alt="" className="-mr-[21px] z-20 w-6 h-6" />
            <img src={white_logo} alt="" className="z-0 w-7 h-7" />
            <img src={ARight} alt="" className="-ml-[21px] z-20 w-6 h-6" />
          </span>

          <h1
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            className="pl-10 text-sm "
          >
            IMAN ANIYA
          </h1>
        </span>

        <div className="space-x-2 pr-5 text-sm hidden lg:flex justify-between w-full">
          {/* LOGO PC  */}
          <span
            onClick={() => navigate("/")}
            style={{
              color: "var(--bg-fill4)",
            }}
            className="self-center relative text-[16px] pr-10 cursor-pointer flex"
          >
            <span className="absolute flex -bottom-4">
              <img src={ALeft} alt="" className="-mr-[12.5px] z-20" />
              <img src={white_logo} alt="" className="z-0" />
              <img src={ARight} alt="" className="-ml-[12.5px] z-20" />
            </span>

            <h1
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
              className="pl-14 text-2xl "
            >
              IMAN ANIYA
            </h1>
          </span>

          <span
            style={{ fontFamily: "Satoshi-Regular" }}
            className="space-x-16 flex"
          >
            <NavLink
              end
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid white" : "",
                fontFamily: "Satoshi-Regular",
              })}
              className={
                "text-[16px] hover:border-b-[2px] pt-2 pb-2 hover:border-white px-0 mx-0 transition-colors duration-300"
              }
              to=""
            >
              Home
            </NavLink>

            <NavLink
              end
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid white" : "",
                fontFamily: "Satoshi-Regular",
              })}
              className={
                " text-[16px] hover:border-b-[2px] hover:border-white pt-2 pb-2 px-0 mx-0 transition-colors duration-300"
              }
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              end
              style={{
                fontFamily: "Satoshi-Regular",
              }}
              className={
                " text-[16px] hover:border-b-[2px] hover:border-white pt-2 pb-2 px-0 mx-0 transition-colors duration-300"
              }
              to="/#services"
            >
              Services
            </NavLink>

            <NavLink
              end
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid white" : "",
                fontFamily: "Satoshi-Regular",
              })}
              className={
                " text-[16px] hover:border-b-[2px] hover:border-white pt-2 pb-2 pr-3 px-0 mx-0 transition-colors duration-300"
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>

            <Buttons
              ButtonTitle={"LET'S TALK"}
              onClick={() => {
                navigate("/#contact");
              }}
            />
          </span>
        </div>

        <div className="flex justify-end">
          {/* Mobile Menu  */}
          {Menu === true ? (
            <div
              onClick={() => setMenu(!Menu)}
              className={
                Menu === true
                  ? "fixed top-0 left-0 h-screen w-2/3 max-h-screen overflow-hidden flex flex-col lg:hidden z-50"
                  : "absolute top-0 w-full max-h-0 overflow-hidden flex flex-col items-center bg-gray-900 lg:hidden"
              }
            >
              <div className="w-full z-50 absolute top-0 left-0 h-screen backdrop-blur-md  flex flex-col items-center justify-around pb-20">
                <div className="bg-white/10 overflow-y-scroll absolute top-0 left-0 h-screen w-[100%] sm:w-[50%] flex flex-col items-start justify-around py-8 px-8">
                  {/* <span
                  onClick={() => navigate("/")}
                  className="self-center block lg:hidden sm:hidden cursor-pointer"
                >
                  <img
                    src="https://testlegion.onmedia.agency/wp-content/uploads/2022/08/logo-inv-s.png"
                    alt=""
                  />
                </span> */}
                  <span className="w-full text-left  ">
                    <MdClose
                      className="font-medium text-4xl"
                      onClick={() => setMenu(false)}
                    />
                  </span>

                  <div className="h-full mt-10 w-full space-y-5 flex flex-col">
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--menu-color)"
                          : "var(--menu-color)",
                        // backgroundColor: isActive ? "var(--btn-bgColor2)" : "",
                      })}
                      className="w-full py-2 pl-5 text-lg tracking-wider font-bold text-start transition-colors duration-300"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--menu-color)"
                          : "var(--menu-color)",
                        // backgroundColor: isActive ? "var(--btn-bgColor2)" : "",
                      })}
                      className="w-full py-2 pl-5 text-lg tracking-wider font-bold text-start transition-colors duration-300"
                      to="/about"
                    >
                      About
                    </NavLink>

                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--menu-color)"
                          : "var(--menu-color)",
                        // backgroundColor: isActive ? "var(--btn-bgColor2)" : "",
                      })}
                      className="w-full py-2 pl-5 text-lg tracking-wider font-bold text-start transition-colors duration-300"
                      to="/#services"
                    >
                      Services
                    </NavLink>

                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--menu-color)"
                          : "var(--menu-color)",
                        // backgroundColor: isActive ? "var(--btn-bgColor2)" : "",
                      })}
                      className="w-full py-2 pl-5 text-lg text-start  font-bold  transition-colors duration-300"
                      to="/portfolio"
                    >
                      Portfolio
                    </NavLink>
                  </div>
                  <span className="border-dotted text-black">{""}</span>
                  <div className="w-full pl-5">
                    <Buttons ButtonTitle={"LET'S TALK"} />
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div
            onClick={() => setMenu(!Menu)}
            // className="px-3 py-3 flex lg:hidden items-center text-white text-sm"
            className="py-1 px-4 mr-4 flex md:mt-0 w-full md:w-fit border border-blue-300/30 backdrop-blur-sm bg-[#203764]/10 text-gray-300 rounded-sm lg:hidden"
          >
            <span className="flex items-center justify-center">
              <RiMenu4Fill size="1em" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
