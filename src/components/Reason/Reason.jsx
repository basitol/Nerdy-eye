import { logo, signature, BsCheck2, reason } from "../../assets";
import { IconContainer } from "../reusables";
import "./Reason.scss";

const Reason = ({ darkmode }) => {
  return (
    <section className={`reason ${darkmode ? "dark" : ""}`}>
      <div className=" mb-9 pt-16 flex justify-center">
        <img src={signature} alt="signature" />
      </div>
      <div className="flex mx-24 wrapper">
        <div className="hidden lg:block w-2/4 img-con">
          <img src={reason} alt="logo" />
        </div>
        <div className="reason--container">
          <div className="reason--title pt-6 lg:mb-14">
            <h2 className="lg:hidden mb-7">
              WHY JOIN THE <span>NERDYEYE TALENT PIPELINE </span>
            </h2>
            <h2 className="text-4xl font-bold mr-10 hidden lg:block ">
              why you should join the
              <span> nerdyeye talent pipeline</span>{" "}
            </h2>
          </div>
          <div className="reason--list">
            <div className="reason--item flex items-center justify-center mb-6">
              <div className="reason--item--image">
                <IconContainer>
                  <BsCheck2 />
                </IconContainer>
              </div>
              <div className="reason--item--text ml-4">
                <p className="font-medium ash txt ">Long-term placements</p>
              </div>
            </div>
            <div className="reason--item flex items-center justify-center mb-6">
              <div className="reason--item--image">
                <IconContainer>
                  <BsCheck2 />
                </IconContainer>
              </div>
              <div className="reason--item--text ml-4">
                <p className="font-medium ash txt ">Long-term placements</p>
              </div>
            </div>
            <div className="reason--item flex items-center justify-center mb-6">
              <div className="reason--item--image">
                <IconContainer>
                  <BsCheck2 />
                </IconContainer>
              </div>
              <div className="reason--item--text ml-4">
                <p className="font-medium ash txt ">Long-term placements</p>
              </div>
            </div>
            <div className="reason--item flex items-center justify-center mb-6">
              <div className="reason--item--image">
                <IconContainer>
                  <BsCheck2 />
                </IconContainer>
              </div>
              <div className="reason--item--text ml-4">
                <p className="font-medium ash txt ">Long-term placements</p>
              </div>
            </div>
            <div className="reason--item flex items-center justify-center mb-6">
              <div className="reason--item--image">
                <IconContainer>
                  <BsCheck2 />
                </IconContainer>
              </div>
              <div className="reason--item--text ml-4">
                <p className="font-medium ash txt ">Long-term placements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pb-9 mt-9 flex justify-center">
        <img src={signature} alt="signature" />
      </div>
    </section>
  );
};

export default Reason;
