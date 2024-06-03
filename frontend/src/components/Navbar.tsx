export function Navbar(): React.ReactElement {
  return (
    <>
      <div className="ml-2 mr-2 mt-2 nav-container">
        <div className="border p-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <nav className="flex justify-center items-center">
            <div className="w-2/5 flex-grow">
              <span>Logo</span>
            </div>

            <div id="nav-items" className="w-2/5 justify-center">
              <ul className="gap-4 hidden sm:flex">
                <li>Courses</li>

                <li>Watch History</li>
                <li>About</li>
              </ul>
            </div>

            <div className="w-1/5 flex justify-end pr-3">
              <span>Profile</span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
