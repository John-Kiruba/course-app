export function Login(): React.ReactElement {
  return (
    <>
      <div
        id="container "
        className="flex items-center justify-center max-w-screen-sm min-h-screen mx-auto "
      >
        <div className="w-3/4 p-1 rounded-md shadow-2xl h-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <div className="flex items-center justify-center w-full h-full p-3 bg-white rounded-sm backdrop-blur-md">
            <form method="POST" className="m-2">
              <div className="">
                <span className="p-1 m-2 mb-2 font-mono text-xl text-center text-transparent border-b border-b-red-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
                  login to your account
                </span>

                <div className="relative flex flex-wrap p-3 mt-10 flex-cols">
                  <div className="relative w-full mb-3">
                    <input
                      type="email"
                      id="email"
                      placeholder="enter email"
                      className="text-gray-600 border border-red-300 rounded-lg input-field focus:outline-dashed focus:outline-gray-400 focus:border-transparent text-pretty bg-inherit focus:placeholder:traslate-y-10"
                      autoFocus
                    ></input>
                    <label htmlFor="email" className="labelAppearance">
                      <i>enter email</i>
                    </label>
                  </div>
                  <div className="relative w-full mb-1">
                    <input
                      type="password"
                      id="pasword"
                      placeholder=" password"
                      className="text-gray-600 border border-red-300 rounded-lg input-field focus:outline-dashed focus:outline-gray-400 focus:border-transparent text-pretty bg-inherit"
                    ></input>
                    <label htmlFor="pasword" className="labelAppearance">
                      <i>password</i>
                    </label>
                  </div>
                  <div className="flex justify-end w-full">
                    <a
                      href="#"
                      className="mr-1 mt-0 text-[10px] tracking-widest  font-serif text-cyan-600 hover:text-cyan-700"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center mt-4 mb-2">
                  <button className="p-3 w-3/5  bg-red-500 text-white tracking-wider hover:text-slate-100 hover: hover:bg-pink-500 hover:shadow-xl hover:-translate-y-[1px] rounded-full active:bg-gradient-to-r active:from-pink-500 active:to-violet-600 transition-all duration-300 ">
                    Login
                  </button>
                </div>
                <span className="mb-2 flex w-full justify-center mr-3  text-[10px] tracking-widest  font-serif text-cyan-600 hover:text-cyan-700">
                  <a href="#">New Here? Sign Up Already!</a>
                </span>

                <div className="relative flex items-center py-3 ">
                  <div className="flex-grow border-t border-gray-400"></div>

                  <span className="flex-shrink mx-4 text-gray-400 ">
                    ( or )
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <div className="flex items-center justify-center mt-2">
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
