import dustin from "../assets/images/dustin.jpeg";
import volk from "../assets/images/volk.jpeg";
import recordPlayer from "../assets/images/record-player.jpg";
import records from "../assets/images/records.jpeg";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { useState } from "react";

export function Carousel() {
  const img: string[] = [volk, dustin, recordPlayer, records];

  const [current, setCurrent] = useState<number>(0);

  let previousImage = () => {
    if (current === 0) {
      setCurrent(img.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextImage = () => {
    if (current === img.length - 1) {
      setCurrent(0);
    } else {
      setCurrent((prevState: number) => {
        return prevState + 1;
      });
    }
  };

  return (
    <>
      <div className="relative overflow-hidden md:h-32 ">
        <div
          className={`flex transition ease-out duration-40 `}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {img.map((i) => {
            console.log(i);
            return (
              <img
                key={img.indexOf(i)}
                src={i}
                className="object-contain w-full md:w-[80%] md:h-[30%] md:flex md:gap-3"
              />
            );
          })}
        </div>
        <div className="absolute top-0 flex items-center justify-between w-full h-full px-2 text-slate-300 ">
          <button onClick={previousImage}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextImage}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}
