import {
  Navbar,
  Hero,
  Works,
  Jobs,
  Industries,
  Footer,
  Reason,
  Collaborate,
} from "./components";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(false);

  function handleToggle() {
    setTheme((prevState) => !prevState);
    // console.log("clicked");
  }

  return (
    <BrowserRouter>
      <div className="">
        <Navbar darkmode={theme} toggledarkmode={handleToggle} />
        <Hero darkmode={theme} toggledarkmode={handleToggle} />
        <Works darkmode={theme} />
        <Jobs darkmode={theme} />
        <Industries darkmode={theme} />
        <Reason darkmode={theme} />
        <Collaborate darkmode={theme} />
        <Footer darkmode={theme} />
      </div>
    </BrowserRouter>
  );
}
