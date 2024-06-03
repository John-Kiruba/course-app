export function Signup(): React.ReactElement {
  return (
    <>
      <div
        id="container"
        className=" mx-auto flex min-h-screen max-w-screen-sm items-center justify-center"
      >
        <div className="h-1/2 w-3/4  rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1  shadow-2xl">
          <div className="flex h-full w-full items-center justify-center bg-white rounded-sm backdrop-blur-md p-3">
            <form method="POST" className="m-2">
              <div className="">
                <span className="border-b border-b-red-500 m-2 mb-2 p-1 text-xl font-mono text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  signup
                </span>

                <div className="mt-7 relative flex flex-wrap flex-cols">
                  <div className="relative w-full mb-7">
                    <input
                      type="email"
                      id="email"
                      placeholder="enter email"
                      className=" input-field   border border-red-300 focus:outline-dashed focus:outline-gray-400  focus:border-transparent rounded-lg text-gray-600 text-pretty bg-inherit focus:placeholder:traslate-y-10"
                      autoFocus
                    ></input>
                    <label htmlFor="email" className="labelAppearance">
                      <i>enter email</i>
                    </label>
                  </div>
                  <div className="relative w-full  mb-3">
                    <input
                      id="password"
                      type="password"
                      placeholder="enter password"
                      className=" input-field   border border-red-300 focus:outline-dashed focus:outline-gray-400  focus:border-transparent rounded-lg text-gray-600 text-pretty bg-inherit"
                    ></input>
                    <label htmlFor="password" className="labelAppearance">
                      <i>enter password</i>
                    </label>
                  </div>

                  <div className="relative w-full mb-0">
                    <input
                      type="password"
                      id="confirm-pasword"
                      placeholder="confirm password"
                      className=" input-field border border-red-300 focus:outline-dashed focus:outline-gray-400  focus:border-transparent rounded-lg text-gray-600 text-pretty bg-inherit"
                    ></input>
                    <label
                      htmlFor="confirm-pasword"
                      className="labelAppearance"
                    >
                      <i>confirm password</i>
                    </label>
                  </div>
                </div>
                <div className="mt-6 mb-2 flex flex-wrap justify-center items-center">
                  <button className="p-3 w-3/5  bg-red-500 text-white tracking-wider hover:text-slate-100 hover: hover:bg-pink-500 hover:shadow-xl hover:-translate-y-[1px] rounded-full active:bg-gradient-to-r active:from-pink-500 active:to-violet-600 transition-all duration-200 ">
                    Signup
                  </button>
                </div>
                <span className="mt-2 flex w-full justify-center mr-3  text-[10px] tracking-widest  font-serif text-cyan-600 hover:text-cyan-700">
                  <a href="#">Have an Account? Login!</a>
                </span>
                <div className="relative flex py-3 items-center ">
                  <div className="flex-grow border-t border-gray-400"></div>

                  <span className="flex-shrink mx-4 text-gray-400 ">
                    ( or )
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <div className="mt-2 flex  justify-center items-center">
                  <span>Sign up with Google</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
