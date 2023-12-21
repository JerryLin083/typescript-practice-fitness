import { useRef } from "react";
import { motion } from "framer-motion";

import { classes, ClassType } from "../assets/data";
import { usePageContext } from "../context/PageContextProvider";
import SectionContainer from "../utilities/SectionContainer";
import Title from "../utilities/Title";
import useScroll from "../hooks/useScroll";
import ClassCard from "./ClassCard";

const OurClasses = () => {
  const { setCurrentPage } = usePageContext();
  const ref = useRef<HTMLDivElement>(null);
  useScroll(ref);

  return (
    <SectionContainer
      id="classes"
      className="min-h-full w-full bg-primary-100 py-20"
    >
      <div className="mx-auto w-5/6">
        <motion.div onViewportEnter={() => setCurrentPage("Our Classes")}>
          <Title>OUR CLASSES</Title>
          <p className="py-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="flex h-80 snap-x gap-8 overflow-hidden scroll-smooth"
        >
          {classes.map((item: ClassType) => (
            <ClassCard
              key={item.name}
              image={item.image}
              description={item.description}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default OurClasses;
