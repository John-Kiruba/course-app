export function Login(): React.ReactElement {
  return (
    <>
      <div
        id="container"
        className=" mx-auto flex min-h-screen max-w-screen-sm items-center justify-center"
      >
        <div className="h-1/2 w-3/4  rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-white rounded-sm backdrop-blur-md p-3">
            <form method="POST" className="m-2">
              <div className="">
                <span className="border-b border-b-red-500 m-2 mb-2 p-1 text-xl font-mono text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  login to your account
                </span>

                <div className="mt-7 relative flex flex-wrap flex-cols">
                  <input
                    type="email"
                    placeholder="enter email"
                    className="w-full p-3 m-3  border border-red-300 focus:outline-dashed focus:outline-gray-400  focus:border-transparent rounded-lg text-gray-600 text-pretty bg-inherit"
                    autoFocus
                  ></input>
                  <input
                    type="password"
                    placeholder="enter password"
                    className="w-full p-3 m-3 mt-1 mb-1 border border-red-300 focus:outline-dashed focus:outline-gray-400  focus:border-transparent rounded-lg text-gray-600 text-pretty bg-inherit"
                  ></input>
                  <div className="flex w-full justify-end">
                    <a
                      href="#"
                      className="mr-3 mt-0 text-[10px] tracking-widest  font-serif text-cyan-600 hover:text-cyan-700"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="mt-6 mb-2 flex flex-wrap justify-center items-center">
                  <button
                    type="submit"
                    className=" w-3/4 border border-white bg-slate-300 text-red-400 active:text-slate-200 active:bg-sky-600 rounded-full p-3 "
                  >
                    Login
                  </button>
                  <span className="mt-2 flex w-full justify-center mr-3  text-[10px] tracking-widest  font-serif text-cyan-600 hover:text-cyan-700">
                    New Here? Sign Up Already!
                  </span>
                </div>

                <div className="relative flex py-3 items-center ">
                  <div className="flex-grow border-t border-gray-400"></div>

                  <span className="flex-shrink mx-4 text-gray-400 ">
                    ( or )
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <div className="mt-2 flex  justify-center items-center">
                  <span>Sign in with Google</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
