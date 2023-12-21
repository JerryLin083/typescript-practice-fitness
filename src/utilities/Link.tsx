import { twMerge } from "tailwind-merge";
import { usePageContext } from "../context/PageContextProvider";

type Props = {
  page: string;
  url: string;
};

const Link = ({ page, url }: Props) => {
  const { currentPage, setCurrentPage } = usePageContext();
  return (
    <a
      className={twMerge(
        "transition duration-500 hover:text-primary-300",
        currentPage === page && "text-primary-500",
      )}
      href={url}
      onClick={() => {
        setCurrentPage(page);
      }}
    >
      {page}
    </a>
  );
};

export default Link;
