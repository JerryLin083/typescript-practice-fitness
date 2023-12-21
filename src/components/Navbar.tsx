import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { usePageContext } from "../context/PageContextProvider";
import { navLinks } from "../assets/data";
import Logo from "../assets/Logo.png";
import Link from "../utilities/Link";
import Button from "../utilities/Button";

const Navbar = () => {
  const { isTop } = usePageContext();
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <nav
      className={twMerge(
        "flexCenter fixed top-0 z-[10000] h-20 w-full py-6 duration-300",
        !isTop && "bg-primary-100",
      )}
    >
      <div className="flexBetween w-5/6">
        {/* logo */}
        <img src={Logo} alt="logo" />

        {/* detail menu bar */}
        <div className="md:flexBetween hidden w-full pl-10">
          <ul className="flexCenter gap-8">
            {navLinks.map((link) => (
              <Link key={link.title} page={link.title} url={link.url} />
            ))}
          </ul>

          <div className="flexCenter gap-8 ">
            <Button text="Sign In" />
            <Button text="Join Us" url="#contact" />
          </div>
        </div>

        {/*mobile menu icon */}
        <button
          className="rounded-full bg-gray-20 p-2 md:hidden"
          onClick={() => setIsToggle(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* mobile menu */}
      {isToggle && (
        <div className="fixed bottom-0 right-0 top-0 z-[9999] min-w-[300px] bg-primary-100 drop-shadow-xl md:hidden">
          <button
            className="float-right p-8"
            onClick={() => setIsToggle(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <ul className="ml-[33%] mt-32 flex flex-col gap-10 text-2xl">
            {navLinks.map((link) => (
              <Link key={link.title} page={link.title} url={link.url} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
