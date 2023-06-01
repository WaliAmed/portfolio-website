import Card1 from "../Cards/Card1";
import patch2 from "../../assets/Images/patch2.svg";
import patch3 from "../../assets/Images/Patch3.svg";
import { OurServicesText } from "../../TextData";

function OurServices() {
  return (
    <div className="w-full mt-10 lg:mt-0 flex flex-col items-center text-white">
      <h2 className="text-[30px] lg:text-[48px] uppercase">Our Services</h2>

      <div className="w-full md:w-10/12 gap-x-10 lg:py-10 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-around gap-y-8">
        {OurServicesText?.map((item, index) => {
          return (
            <span key={index} className="z-40">
              <Card1 item={item} index={index} rd={item.rd} />
            </span>
          );
        })}

        <img
          src={patch3}
          alt=""
          className="absolute top-[35%] left-[33%] z-0"
        />
        <img src={patch2} alt="" className="absolute left-[22%] z-0" />
      </div>
    </div>
  );
}

export default OurServices;
