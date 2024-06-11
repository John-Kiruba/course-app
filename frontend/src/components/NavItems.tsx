import { ReactElement } from "react";

export function NavItems({ isOpen }: { isOpen: boolean }): ReactElement {
  return (
    <div
      className={`${
        isOpen
          ? "translate-y-0 block "
          : "hidden -translate-y-full md:block md:-translate-y-0"
      } transition-all duration-300 ease-out absolute right-0 top-20 my-2 tracking-tight w-3/4 md:w-auto md:static `}
    >
      <ul className="flex flex-col transition-all duration-200 ease-out rounded-md md:flex-row md:gap-[7px] md:mr-5 ">
        <li className="flex items-center justify-center w-auto p-2 my-1 text-2xl transition-all duration-200 ease-out bg-gray-200 rounded-md px-7 md:px-4 hover:scale-105 hover:rounded-xl hover:text-orange-500 hover:bg-slate-100 hover:shadow-indigo-800/10">
          <a href="#" className="nav-items">
            Products
          </a>
        </li>
        <li className="flex items-center justify-center w-auto p-2 my-1 text-2xl transition-all duration-200 ease-out bg-gray-200 rounded-md px-7 md:px-4 hover:scale-105 hover:rounded-xl hover:text-orange-500 hover:bg-slate-100 hover:shadow-indigo-800/10">
          <a href="#" className="nav-items">
            Solutions
          </a>
        </li>
        <li className="flex items-center justify-center w-auto p-2 my-1 text-2xl transition-all duration-200 ease-out bg-gray-200 rounded-md px-7 md:px-4 hover:scale-105 hover:rounded-xl hover:text-orange-500 hover:bg-slate-100 hover:shadow-indigo-800/10">
          <a href="#" className="nav-items">
            Careers
          </a>
        </li>
        <li className="flex items-center justify-center w-auto p-2 my-1 text-2xl transition-all duration-200 ease-out bg-gray-200 rounded-md px-7 md:px-4 hover:scale-105 hover:rounded-xl hover:text-orange-500 hover:bg-slate-100 hover:shadow-indigo-800/10">
          <a href="#" className="nav-items">
            Pricing
          </a>
        </li>
        <li className="flex items-center justify-center w-auto p-2 my-1 text-2xl transition-all duration-200 ease-out bg-gray-200 rounded-md px-7 md:px-4 hover:scale-105 hover:rounded-xl hover:text-orange-500 hover:bg-slate-100 hover:shadow-indigo-800/10">
          <a href="#" className="nav-items">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
