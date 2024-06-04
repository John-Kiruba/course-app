export function Navbar(): React.ReactElement {
  return (
    <>
      <div className="mt-2 ml-2 mr-2 nav-container">
        <div className="p-3 text-transparent border bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <nav className="flex flex-row items-center justify-center">
            <div className="flex-grow">
              <span>Logo</span>
            </div>

            <div className="justify-end flex-grow pr-3 ">
              <span className="flex justify-end">Profile</span>
              <div id="nav-items" className="flex justify-end text-right ">
                <ul className="gap-5 mt-2 ">
                  <div className="flex justify-end">
                    <li className="mr-3">Courses</li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="my-auto text-gray-300 place-items-center size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                      />
                    </svg>
                  </div>

                  <li>Watch History</li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
