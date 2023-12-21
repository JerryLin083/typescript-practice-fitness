import { twMerge } from "tailwind-merge";
import { usePageContext } from "../context/PageContextProvider";

type Props = {
  text: string;
  url?: string;
  className?: string;
};

const Button = ({ text, className, url }: Props) => {
  const { setCurrentPage } = usePageContext();

  return (
    <a
      className={twMerge(
        "cursor-pointer rounded-md bg-secondary-500 px-8 py-2 transition duration-300 hover:bg-primary-500 hover:text-white",
        className,
      )}
      onClick={() => setCurrentPage(text)}
      href={url}
    >
      {text}
    </a>
  );
};

export default Button;
