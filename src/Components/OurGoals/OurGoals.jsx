import patch2 from "../../assets/Images/patch2.svg";

function OurGoals() {
  return (
    <>
      <div className="w-full relative py-20 lg:h-screen flex flex-col justify-center items-center text-white/80">
        <div className="w-10/12 z-10 h-full py-10 lg:py-0 lg:h-[85%] goals-image flex justify-center items-center">
          <div className="w-10/12 h-10/12 lg:h-2/3 backdrop-blur-md bg-[#203764]/10 p-5 lg:p-10 text-center flex flex-col justify-center items-center">
            <h2 className="lg:text-lg satoshi-medium tracking-widest font-semibold">
              Our Goals
            </h2>
            <h2 className="pt-5 leading-[25px] lg:pt-12 px-1 text-xs lg:text-[20px] text-gray-300">
              At <b>Iman Aniya</b>, our goal is to provide you with the best
              digital solutions to help your business succeed. Whether you need
              a new website, social media management, or search engine
              optimization, our team of experts is here to help. We understand
              the importance of having a strong online presence in today’s
              digital age, and we are dedicated to helping you achieve your
              goals. With our range of services and our commitment to
              excellence, we are confident that we can help you take your
              business to the next level. Contact us today to learn more about
              how we can help you succeed in the digital world.
            </h2>
          </div>
        </div>
        <img src={patch2} alt="" className="absolute z-0 -bottom-12 right-12" />
      </div>

      <div className="w-full lg:pt-20 lg:h-screen flex flex-col justify-center items-center text-white">
        <div className="w-10/12 py-10 lg:py-0 lg:h-[90%] shadow-lg shadow-black aims-image flex justify-center items-center">
          <div className="w-10/12 h-10/12 lg:h-3/4 border border-blue-300/30 backdrop-blur-md bg-[#203764]/10 text-gray-300 rounded-sm text-center flex flex-col justify-center items-center p-5 lg:p-0 lg:px-14">
            <h2 className="lg:text-lg satoshi-medium tracking-widest font-semibold">
              Our Aim
            </h2>
            <h2 className="pt-5 lg:pt-12 leading-[25px] text-xs lg:text-[20px] text-gray-300">
              We Aim To Take Your Company To the Next Level. Achieve your
              business objectives with tailored solutions using modern
              technology and deep research. We always prefer devising custom
              business solutions using modern technology, whether it’s SEO for
              any kind of website, content writing for blog and social media
              posts, or graphic designing, logos, posters and more.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurGoals;
