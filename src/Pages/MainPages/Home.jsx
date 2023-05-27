import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import HeroSection from "../../Components/HerpSection/HeroSection";
import DigitalCreative from "../../Components/DigitalCreative/DigitalCreative";
import OurServices from "../../Components/OurServices/OurServices";
import OurGoals from "../../Components/OurGoals/OurGoals";
const FeaturedWork = React.lazy(() =>
  import("../../Components/FeaturedWork/FeaturedWork")
);
const Testimonials = React.lazy(() =>
  import("../../Components/Testimonials/Testimonials")
);
const Contact = React.lazy(() => import("../../Components/Contact/Contact"));

function Home() {
  const { setHeaderShow } = useContext(ThemeContext);

  useEffect(() => {
    setHeaderShow(true);
  }, []);
  return (
    <div className="w-full">
      <section>
        <HeroSection />
      </section>

      <section>
        <DigitalCreative />
      </section>

      <section id="services">
        <OurServices />
      </section>

      <section>
        <OurGoals />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <FeaturedWork />
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
}

export default Home;
