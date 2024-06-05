import { useMediaQuery } from "../hooks/UseMediaQuery";

export function Navbar(): React.ReactElement {
  const isLargeScreen = useMediaQuery("(min-width: 640px");

  return (
    <>
      <div className="fixed w-full max-w-full mx-auto border shadow-md min-h-10 nav-container">
        <div className="  top-0  bg-[#FFEBEC] ">
          <nav className="flex flex-row items-center justify-center p-3 py-4 text-transparent shadow-black/5 bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <div className="flex-grow ml-4">
              <span>Logo</span>
            </div>
            {isLargeScreen ? <LargeScreens /> : <SmallScreens />}
          </nav>
        </div>
      </div>
    </>
  );
}

function LargeScreens(): React.ReactElement {
  return (
    <>
      <div className="flex justify-between w-3/5 ">
        <div id="nav-items" className="flex justify-start w-2/3 text-center ">
          <ul className="flex gap-5">
            <li className="mr-2">Courses</li>

            <li className="mr-2">Watch History</li>

            <li className="mr-2">About</li>
          </ul>
        </div>
        <div className="flex justify-end w-1/3 mr-4">
          <span className="">Profile</span>
        </div>
      </div>
    </>
  );
}

function SmallScreens(): React.ReactElement {
  return (
    <div className="justify-end flex-grow pr-3 ">
      <span className="flex justify-end">Profile</span>
      <div id="nav-items" className="flex justify-end text-right ">
        <ul className="gap-5 mt-3 ">
          <div className="flex justify-end">
            <li className="mr-2">Courses</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="my-auto text-gray-400 place-items-center size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
              />
            </svg>
          </div>
          <div className="flex justify-end">
            <li className="mr-2">Watch History</li>
            <svg
              className="my-auto text-gray-400 place-items-center size-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="flex justify-end">
            <li className="mr-2">About</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="my-auto text-gray-400 place-items-center size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
        </ul>
      </div>
    </div>
  );
}
