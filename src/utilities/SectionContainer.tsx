import { motion } from "framer-motion";

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({ children, id, className }: Props) => {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {},
        transition: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionContainer;
