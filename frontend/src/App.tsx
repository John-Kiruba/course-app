import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Navbar } from "./components/Navbar";

import "./App.css";
import { Carousel } from "./components/Carousel";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="w-[60%] md:w-[80%]  m-auto">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
