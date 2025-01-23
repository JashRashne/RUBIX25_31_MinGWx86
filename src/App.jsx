import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Desktop from "./components/Desktop";
import Chrome from "./components/Chrome";
import MeetDesktop from "./components/GMeet/MeetDesktop";
import MeetChrome from "./components/GMeet/MeetChrome";
import MeetHome from "./components/GMeet/MeetHome";
import MeetScreen from "./components/GMeet/MeetScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import URLScanner from "./components/URLScanner";
import GmailScreen from "./components/Gmail/GmailScreen";
import EmailInterface from "./components/EmailInterface";
import GmailChrome from "./components/Gmail/GmailChrome";
import GmailDesktop from "./components/Gmail/GmailDesktop";
import URLEducation from './components/URLEducation'
import Landing from "./components/Landing";
import CommunityForum from './components/CommunityForum'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/meet-desktop" element={<MeetDesktop />} />
          <Route path="/meet-chrome" element={<MeetChrome />} />
          <Route path="/meet-home" element={<MeetHome />} />
          <Route path="/meet-screen" element={<MeetScreen />} />
          <Route path="/url-scan" element={<URLScanner />} />
          <Route path="/gmail-screen" element={<GmailScreen />} />
          <Route path="/gmail-desktop" element={<GmailDesktop />} />
          <Route path="/gmail-chrome" element={<GmailChrome />} />
          <Route path="/url-education" element={<URLEducation />} />
          <Route path="/community" element={<CommunityForum />} />
        </Routes>
      </Router>
      {/* Change */}
    </>
  );
}

export default App;
