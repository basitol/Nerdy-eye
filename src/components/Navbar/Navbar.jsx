import { useState } from "react";
import "./Navbar.scss";
import { logo } from "../../assets";

const Navbar = () => {
  const [theme, setTheme] = useState(true);

  return (
    <section className="nav">
      <img src={logo} alt="logo" />
      Navbar
    </section>
  );
};

export default Navbar;
