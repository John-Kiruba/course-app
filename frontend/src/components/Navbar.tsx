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
        className="sticky top-0 z-50  my-2 shadow-xl mx-auto max-w-7xl  shadow-indigo-800/10 rounded-[10px]"
      >
        <nav
          id="navbar"
          className="relative flex items-center justify-between  bg-gray-200  rounded-[10px]"
        >
          <div className="py-2">
            <img
              src={stripelogo}
              className="w-10 ml-3 md:size-16 md:h-10"
            ></img>
          </div>
          <NavItems isOpen={isOpen} />
          <button
            onClick={handleMenu}
            className="flex items-center justify-center mr-4 text-indigo-500 size-6 md:hidden"
          >
            {isOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </nav>
      </div>
    </>
  );
}
