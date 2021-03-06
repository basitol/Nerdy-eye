import {
  logo,
  logoDark,
  AiOutlineMenu,
  FiShoppingCart,
  BiUser,
  FiChevronDown,
  IoMdClose,
  rightLightStroke,
  leftLightStroke,
  rightDarkStroke,
  leftDarkStroke,
} from "../../assets";
import { menuData } from "../../assets/data";
import { IconContainer, CustomNavLink } from "../reusables";
import { useState } from "react";

import "./Navbar.scss";

const Navbar = ({ toggledarkmode, darkmode }) => {
  const [menuOption, setMenuOption] = useState(true);

  function togglemenu() {
    setMenuOption((prevState) => !prevState);
  }

  return (
    <section
      className={`nav ${
        darkmode ? "dark" : ""
      } flex flex-row px-5 py-9 md:px-10 justify-between items-center`}
    >
      <div className="logo">
        <img src={darkmode ? logoDark : logo} alt="logo" />
      </div>

      <div
        className={`menu flex items-center  ${menuOption ? "close" : "open"}`}
      >
        <div className="hidden lg:inline">
          <img src={darkmode ? leftDarkStroke : leftLightStroke} alt="stroke" />
        </div>
        <ul className={`flex justify-between`}>
          {menuData.map((nav) => {
            const { id, title } = nav;

            return (
              <li key={id} className="">
                <CustomNavLink href={title}>
                  <span className="title">{title}</span>
                </CustomNavLink>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:inline">
          <img
            src={darkmode ? rightDarkStroke : rightLightStroke}
            alt="stroke"
          />
        </div>

        <div className="tog md:hidden">
          <div className="toggler">
            <div className="toggler--slider" onClick={toggledarkmode}>
              <div className="toggler--slider--circle"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="right flex">
        <IconContainer className={"cart sm:mr-9"}>
          <FiShoppingCart />
        </IconContainer>

        {menuOption ? (
          <IconContainer
            className={"menu-icon ml-9 md:hidden"}
            onClick={togglemenu}
          >
            <AiOutlineMenu />
          </IconContainer>
        ) : (
          <IconContainer
            className={`menu-icon-x ml-9 md:hidden `}
            onClick={togglemenu}
          >
            <IoMdClose
              className={`${darkmode ? "text-white" : "text-white"}`}
            />
          </IconContainer>
        )}
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
