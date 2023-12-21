import { motion } from "framer-motion";

import { fadeIn } from "../assets/helper";
import { usePageContext } from "../context/PageContextProvider";
import Button from "../utilities/Button";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorForture from "../assets/SponsorFortune.png";
import SectionContainer from "../utilities/SectionContainer";

const Home = () => {
  const { setCurrentPage } = usePageContext();

  return (
    <SectionContainer id="home" className="bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setCurrentPage("Home")}
        className="md:flexCenter mx-auto w-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            variants={fadeIn({ duration: 0.5 })}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 max-w-sm text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn({ duration: 0.5, delay: 0.2 })}
            className="mt-8 flex items-center gap-8"
          >
            <Button text="Join Us" />
            <a
              href="#contact"
              onClick={() => setCurrentPage("Contact Us")}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            >
              <p>Learn more</p>
            </a>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* Sponsors */}
      <div className="hidden h-36 w-full bg-primary-100 py-10 md:block">
        <div className="flexBetween mx-auto w-3/4">
          <img src={SponsorRedBull} alt="redbull-sponsor" />
          <img src={SponsorForbes} alt="forbes-sponsor" />
          <img src={SponsorForture} alt="fortune-sponsor" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Home;
