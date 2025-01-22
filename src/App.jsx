import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Desktop from "./components/Desktop";
import Chrome from "./components/Chrome";
import MeetHome from "./components/MeetHome";
import MeetScreen from "./components/MeetScreen";
import GmailScreen from "./components/GmailScreen";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MeetScreen />
      {/* <Navbar /> */}
      {/* <GmailScreen /> */}
    </>
  );
}

export default App;
