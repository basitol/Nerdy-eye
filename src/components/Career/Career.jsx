import "./Career.scss";
// import { phone } from "../../assets";

const Career = ({ image, title, available, darkmode }) => {
  return (
    <div>
      <div className={`career ${darkmode ? "dark" : ""}`}>
        <div className="career__icon">
          <img src={image} alt="phone" />
        </div>
        <div className="career--title">
          <div className="career--title--header">
            <h1>{title}</h1>
          </div>
          <div className="career--title--sub-header">
            <h2>{available}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
