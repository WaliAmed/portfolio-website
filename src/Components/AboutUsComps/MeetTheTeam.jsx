import React from "react";
import CHead from "../../assets/Images/MeetTheTeam/CompanyHeads.svg";
import MTeam from "../../assets/Images/MeetTheTeam/MeetTheTeam.svg";
import black from "../../assets/Images/MeetTheTeam/BlackPatch.svg";
import black2 from "../../assets/Images/MeetTheTeam/BlackPatch2.svg";
import black3 from "../../assets/Images/MeetTheTeam/BlackPatch3.svg";

function MeetTheTeam() {
  return (
    <div className="w-9/12 h-[80vh] team-image my-20 relative flex">
      <img src={CHead} alt="" className="w-[30px] absolute left-3 top-[18%]" />
      <img src={MTeam} alt="" className="w-[30px] absolute right-3 top-[18%]" />

      {/* LHS  */}
      <div className="w-2/3 flex flex-col space-y-2 justify-center items-center">
        <span className="w-full flex pl-20 items-center pr-10">
          <img src={black} alt="" className="w-[200px]" />

          <p className="satoshi-medium text-[#E6E6E6] text-xs tracking-widest">
            “We place great importance on the idea of powerful presentation,
            which includes branding and efficient visual communication methods.
            We believe in outstanding services For each project we take on,”
          </p>
        </span>

        <span className="w-full flex pl-20 items-center pr-10">
          <img src={black2} alt="" className="w-[200px]" />

          <p className="satoshi-medium text-[#E6E6E6] text-xs tracking-widest">
            “By offering creative materials, the idea is to help clients become
            industry leaders. Our team diversity, depth of knowledge, and
            creative thinking guarantee that our clients get the best.”
          </p>
        </span>
      </div>

      {/* RHS */}
      <div className="w-1/3 flex justify-center items-center pr-14">
        {/* <img src={black2} alt="" className="w-[400px]" /> */}
        <span className="w-[240px] h-[240px] bg-gradient-to-b from-[#212336]/50 via-[#212336]/30 to-[#212336]/50 border border-gray-300/30 rounded-full shadow-lg shadow-gray-900 text-center flex flex-col items-center justify-center px-10 space-y-5">
          <p className="satoshi-medium text-[10px]">OUR TEAM</p>

          <p className="text-[10px]">
            “We have assembled a creative team of like-minded people who like to
            challenge themselves & get better with every project. So believe it
            when we say you are in good hands”
          </p>
        </span>
      </div>
    </div>
  );
}

export default MeetTheTeam;
