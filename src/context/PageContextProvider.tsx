import { useContext, useState, createContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

interface Context {
  currentPage: string;
  setCurrentPage: (value: string) => void;
  isTop: boolean;
}

const PageContext = createContext<Context | null>(null);

const PageContextProvider: React.FC<Props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>("");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function top() {
      if (window.scrollY === 0) {
        setIsTop(true);
        setCurrentPage("Home");
      } else {
        setIsTop(false);
      }
    }

    document.addEventListener("scroll", top);

    return () => document.addEventListener("scroll", top);
  }, []);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage, isTop }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === null) {
    throw new Error("Not in page context");
  }

  return context;
};
