import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Desktop from "./components/Desktop";
import Chrome from "./components/Chrome";
import MeetDesktop from "./components/GMeet/MeetDesktop";
import MeetChrome from "./components/GMeet/MeetChrome";
import MeetHome from "./components/GMeet/MeetHome";
import MeetScreem from "./components/GMeet/MeetScreem";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="/meet-desktop" element={<MeetDesktop />} />
          <Route path="/meet-chrome" element={<MeetChrome />} />
          <Route path="/meet-home" element={<MeetHome />} />
          <Route path="/meet-screen" element={<MeetScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
