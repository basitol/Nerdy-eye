import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(false);

  function handleToggle() {
    setTheme((prevState) => !prevState);
    console.log("clicked");
  }

  return (
    <BrowserRouter>
      <div className="">
        <Navbar darkmode={theme} toggledarkmode={handleToggle} />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </BrowserRouter>
  );
}
