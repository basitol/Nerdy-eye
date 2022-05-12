import "./Job.scss";
import { map } from "../../assets";

const Job = ({
  darkmode,
  className,
  job,
  title,
  jobLocation,
  type,
  industry,
  image,
  pathImage,
  imgClass,
}) => {
  return (
    <div className={`job py-7 mb-9 ${darkmode ? "dark" : ""} ${className}`}>
      <div className="job__container">
        <div className="job__container__path">
          <div className="job__container__path__item flex items-center ml-8">
            <div className={` mr-4 ${imgClass}`}>
              <img src={pathImage} alt="path" className="mr-4" />
            </div>
            <p className="job__container__path__item__text text-base font-semibold">
              {job}
            </p>
          </div>
          <div className="job__container__title ml-7 mt-6">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <div className="job__container__description flex ml-7 mt-6 mb-7">
            <div className="job__container__description__location flex mr-5">
              <img src={map} alt="location" className="location" />
              <p className="ml-2 text-sm font-bold">{jobLocation}</p>
            </div>
            <p className="text-sm font-medium type">{type}</p>
          </div>
          <hr></hr>
          <div className="job__container__industry mt-2">
            <div className="job__container__industry__item flex items-center justify-between pr-5 pl-8">
              <p className="job__container__industry__item__text">{industry}</p>
              <img src={image} alt="path" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
