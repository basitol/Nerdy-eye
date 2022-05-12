import { Navbar, Hero, Works, Jobs } from "./components";
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
      </div>
    </BrowserRouter>
  );
}
