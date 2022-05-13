import { IconContainer } from "../reusables";
import {
  MdLocationPin,
  MdOutlineMail,
  MdLocalPhone,
  logo,
  AiOutlineInstagram,
  AiOutlineYoutube,
  FiTwitter,
  FiLinkedin,
} from "../../assets";
import "./Footer.scss";

const Footer = ({ darkmode }) => {
  return (
    <section className={`footer ${darkmode ? "dark" : ""}`}>
      <div className="footer--container">
        <div className="mb-7">
          <img src={logo} alt="google logo" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
            <div className="footer--title lg:w-4/12">
              <h2 className="text-4xl font-bold mr-10">Contact</h2>
              <p className="font-medium ash txt mb-7">
                We build and we teach tech and digital solutions
              </p>
              <div className="flex items-center mt-5">
                <IconContainer>
                  <MdLocationPin />
                </IconContainer>
                <p className="font-medium ash txt">
                  4 Ishola Alagomeji, Off Herbert Macaulay, Yaba, Lagos
                </p>
              </div>
              <div className="flex items-center mt-5">
                <IconContainer>
                  <MdOutlineMail />
                </IconContainer>
                <p className="font-medium ash txt ">info@nerdyeye.com</p>
              </div>
              <div className="flex items-center mt-5">
                <IconContainer>
                  <MdLocalPhone />
                </IconContainer>
                <p className="font-medium ash txt ">+234 812 724 4042</p>
              </div>
            </div>
            <div className="footer--title lg:w-4/12">
              <h2 className="text-4xl font-bold mt-20 lg:mt-0 mr-10">
                SERVICES
              </h2>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt">
                  Website Design/Development
                </p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">Mobile App Development </p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">
                  Digital Marketing Campaign Management
                </p>
              </div>
            </div>
            <div className="footer--title lg:w-4/12">
              <h2 className="text-4xl font-bold mr-10 mt-20 lg:mt-0">
                COURSES
              </h2>
              <p className="font-medium ash txt mb-7">
                Digital Marketing Training
              </p>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt">Graphics Design Training</p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">info@nerdyeye.com</p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">
                  Front-end Website Development
                </p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">
                  Full-stack Web And Mobile App Development{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5">
            <div className="footer--title lg:w-4/12">
              <h2 className="text-4xl font-bold mt-20 mr-10">COMPANY</h2>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt">About</p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">WorkForce</p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">Contact</p>
              </div>
            </div>
            <div className="footer--title lg:w-4/12">
              <h2 className="text-4xl font-bold mt-20 mr-10">OTHER LINKS</h2>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt">Careers</p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">Site Map</p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">Privacy</p>
              </div>
              <div className="flex items-center mt-5">
                <p className="font-medium ash txt ">Terms</p>
              </div>
            </div>
            <div className="footer--title mt-5 lg:mt-20 lg:w-4/12">
              <h2 className="text-4xl font-bold mr-10 ">Social Media</h2>
              <div className="flex gap-3">
                <div className="flex items-center">
                  <IconContainer>
                    <AiOutlineInstagram />
                  </IconContainer>
                </div>
                <div className="flex items-center">
                  <IconContainer>
                    <FiTwitter />
                  </IconContainer>
                </div>
                <div className="flex items-center">
                  <IconContainer>
                    <FiLinkedin />
                  </IconContainer>
                </div>
                <div className="flex items-center">
                  <IconContainer>
                    <AiOutlineYoutube />
                  </IconContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom px-5 py-1">
        All Rights Reserved Nerdy Eye Powered By Dungada Tech Ltd.
      </div>
    </section>
  );
};

export default Footer;
