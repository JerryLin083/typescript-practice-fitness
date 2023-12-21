import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContextProvider";
import { fadeIn } from "../assets/helper";

type Props = {
  Icon: React.ReactNode;
  index: number;
  title: string;
  description: string;
};

const BenefitCard = ({ Icon, title, description, index }: Props) => {
  const { setCurrentPage } = usePageContext();

  return (
    <motion.div
      variants={fadeIn({ duration: 0.2, delay: index * 0.2 })}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="flexCenter mb-4">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {Icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <a
        href={`#contact`}
        onClick={() => setCurrentPage("Contact Us")}
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      >
        <p>Learn more</p>
      </a>
    </motion.div>
  );
};

export default BenefitCard;
