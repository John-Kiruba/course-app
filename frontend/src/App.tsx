import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Navbar } from "./components/Navbar";

import "./App.css";
import { Carousel } from "./components/Carousel";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Card } from "./components/card";

import dustin from "../src/assets/images/dustin.jpeg";
import volk from "../src/assets/images/volk.jpeg";
import records from "../src/assets/images/records.jpeg";
import recordPlayer from "../src/assets/images/record-player.jpg";

function App() {
  // const [count, setCount] = useState(0);
  const slides = [
    { url: volk, title: volk },
    { url: dustin, title: dustin },
    { url: records, title: records },
    { url: recordPlayer, title: recordPlayer },
  ];
  return (
    <div>
      <div className="mx-3">
        <Navbar />
      </div>
      {/* <Card /> */}
      <div className="flex justify-center h-64 mx-auto mt-6 w-96">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default App;
