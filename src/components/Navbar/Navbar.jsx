import {
  logo,
  AiOutlineMenu,
  FiShoppingCart,
  BiUser,
  FiChevronDown,
  rightLightStroke,
  leftLightStroke,
} from "../../assets";
import { menuData } from "../../assets/data";
import { IconContainer, CustomNavLink } from "../reusables";
import "./Navbar.scss";

const Navbar = ({ toggledarkmode, darkmode }) => {
  return (
    <section
      className={`nav ${
        darkmode ? "dark" : ""
      } flex flex-row px-5 py-9 md:px-10 justify-between items-center`}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="menu flex items-center">
        <div className="hidden lg:inline">
          <img src={leftLightStroke} alt="stroke" />
        </div>
        <ul className="flex justify-between">
          {menuData.map((nav) => {
            const { id, title } = nav;

            return (
              <li key={id} className="">
                <CustomNavLink
                  href={title}
                  // onClick={changeVisibility}
                  // className={title === "Dashboard" && "active"}
                >
                  <span className="title">{title}</span>
                </CustomNavLink>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:inline">
          <img src={rightLightStroke} alt="stroke" />
        </div>

        <div className="tog md:hidden">
          <div className="toggler">
            <p className="toggler--light">Light</p>
            <div className="toggler--slider" onClick={toggledarkmode}>
              <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
          </div>
        </div>
      </div>

      <div className="right flex">
        <IconContainer className={"cart sm:mr-9"}>
          <FiShoppingCart />
        </IconContainer>
        <IconContainer className={"menu-icon ml-9 md:hidden z-50"}>
          <AiOutlineMenu />
        </IconContainer>
        <div className="user hidden  md:flex items-center">
          <IconContainer className={"user mr-5"}>
            <BiUser />
          </IconContainer>
          <span className="acc mr-5">My Account</span>
          <IconContainer className={"chevron"}>
            <FiChevronDown />
          </IconContainer>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
