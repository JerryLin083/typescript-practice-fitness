import { motion } from "framer-motion";

import { fadeIn } from "../assets/helper";
import { BenefitType, benefits } from "../assets/data";
import { usePageContext } from "../context/PageContextProvider";
import SectionContainer from "../utilities/SectionContainer";
import Title from "../utilities/Title";
import ListPattern from "../utilities/ListPattern";
import BenefitCard from "./BenefitCard";
import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";
import Button from "../utilities/Button";

const Benefits = () => {
  const { setCurrentPage } = usePageContext();

  return (
    <SectionContainer id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setCurrentPage("Benefits")}>
        <motion.div variants={fadeIn({ duration: 0.5 })}>
          <Title>MORE THAN JUST GYM.</Title>

          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>

          <ListPattern
            className="flexCenter mt-5 flex-col gap-8 md:flex-row"
            data={benefits}
            render={(benefit: BenefitType, index: number) => (
              <BenefitCard
                key={benefit.title}
                index={index}
                title={benefit.title}
                Icon={benefit.icon}
                description={benefit.description}
              />
            )}
          />
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="md:flexBetween mt-16 gap-20 md:mt-28">
          <img className="mx-auto" src={BenefitsPageGraphic} />
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div variants={fadeIn({ duration: 0.5, delay: 0.5 })}>
                  <Title>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Title>
                </motion.div>
              </div>
            </div>
            {/* Content */}
            <motion.div variants={fadeIn({ duration: 0.75, delay: 0.5 })}>
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative z-[10]">
              <div className="before:absolute before:-bottom-20 before:right-10 before:z-[-1] before:content-sparkles">
                <Button text="Join Now" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default Benefits;
