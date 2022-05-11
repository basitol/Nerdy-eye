import { Navbar, Hero } from "./components";
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
        <Navbar
          darkmode={theme}
          toggledarkmode={handleToggle}
          // togglemenu={handleMenu}
        />
        <Hero darkmode={theme} />
      </div>
    </BrowserRouter>
  );
}
