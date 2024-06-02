import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
}

export default App;
