import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Navbar } from "./components/Navbar";

import "./App.css";
import { Carousel } from "./components/Carousel";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Card } from "./components/card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
