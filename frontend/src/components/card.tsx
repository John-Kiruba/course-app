import dustin from "../assets/images/dustin.jpeg";
import volk from "../assets/images/volk.jpeg";
import recordPlayer from "../assets/images/record-player.jpg";
import records from "../assets/images/records.jpeg";

export function Card() {
  const tagList: string[] = ["worldChampion", "featherwerightking", "p4p"];

  function tags(tagList: string[]) {
    return tagList.map((t: string) => {
      return (
        <span
          className="p-1 px-2 mt-3 ml-2 bg-gray-300 rounded-md w-fit text-[0.8rem] font-title
             font-light"
        >
          {`#${t}`}
        </span>
      );
    });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center  max-w-md max-h-96  mx-auto min-h-[10rem] md:min-h-[20rem] md:max-h-max shadow-xl shadow-indigo-500/10 rounded-md bg-slate-600 md:w-2/6  overflow-hidden ">
        <img
          src={records}
          className="flex items-start object-cover object-top w-full h-56 md:h-72 lg:h-96"
        />

        <div className="flex flex-col w-full bg-white h-36">
          <h2 className="p-2 mx-2 mt-1 font-mono">Alex Volkonosky</h2>
          <div className="flex mx-2 mt-1 text-center divide-x justify-self-start">
            <span className="p-2 pr-4 font-mono font-medium text-indigo-500 ">
              Cost: $ 24.22
            </span>
            <span className="p-2 pl-4 font-mono font-medium text-indigo-500">
              Reviews: 4.2
            </span>
          </div>

          <div className="flex ml-2 flex-nowrap">{tags(tagList)}</div>
        </div>
      </div>
    </>
  );
}
