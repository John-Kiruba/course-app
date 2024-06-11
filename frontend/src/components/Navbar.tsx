import stripelogo from "../assets/stripelogo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavItems } from "./NavItems";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setTimeout(() => setIsOpen(!isOpen), 15);
  }

  return (
    <>
      <div
        id="navbar-container"
        className="sticky top-0 z-50 mx-4 my-4 shadow-xl sm:mx-auto max-w-7xl min-w-fit shadow-indigo-800/10 rounded-[10px]"
      >
        <nav
          id="navbar"
          className="relative flex items-center justify-between w-full  h-auto mx-auto bg-gray-200 max-h-20 rounded-[10px]"
        >
          <div className="">
            <img src={stripelogo} className="ml-3 size-20"></img>
          </div>
          <NavItems isOpen={isOpen} />
          <button
            onClick={handleMenu}
            className="flex items-center justify-center w-10 mr-4 text-indigo-500 md:hidden"
          >
            {isOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </nav>
      </div>
    </>
  );
}
