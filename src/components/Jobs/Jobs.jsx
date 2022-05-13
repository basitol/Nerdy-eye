import { Career, Job } from "../index";
import { careerData, jobData } from "../../assets/data";
import { signature, offer } from "../../assets";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "./Jobs.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import { CustomButton } from "../reusables";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Jobs = ({ darkmode }) => {
  //   const [current, setCurrent] = useState(0);
  const [jobInfo, setJobInfo] = useState({
    jobData,
    itemsToShow: 3,
    expanded: false,
  });

  function handleExpand() {
    setJobInfo({
      ...jobInfo,
      itemsToShow: jobInfo.itemsToShow === 3 ? jobInfo.jobData.length : 3,
      expanded: !jobInfo.expanded,
    });
  }

  return (
    <section className={`jobs ${darkmode ? "dark" : ""} pt-6 pb-6`}>
      <div className="mb-9 flex justify-center">
        <img src={signature} alt="signature" />
      </div>
      <div className="jobs__header mt-5 pb-5">
        <h1>
          WHO SHOULD JOIN THE <span className="nerd">NERDYEYE PIPELINE</span>
        </h1>
      </div>
      <div className="jobs__sub-header pb-5">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet
          in lacus, duis sagittis. Eget elementum duis
        </h2>
      </div>
      <div className="career-list mt-9">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          // pass Swiper instance props

          // SwiperOptions

          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {careerData.map((career, index) => {
            const { id } = career;
            return (
              <SwiperSlide
                style={{ width: "100%" }}
                className="lg:flex lg:items-center lg:justify-center lg:mx-3"
              >
                <Career key={id} {...career} darkmode={darkmode} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="relative">
        <div className="mb-9 mt-16 flex justify-center">
          <img src={signature} alt="signature" />
        </div>
        <div className="jobs__header mt-5 pb-5">
          <h1>
            <span className="nerd">JOB</span> OFFERS
          </h1>
        </div>
        <div>
          <div className="flex mx-0 md:mx-10 xlg:mx-20">
            <div className="flex justify-center offers mb-12 md:mb-0 w-full lg:w-2/4">
              <div className="jobs__sub-header pb-5 md:mr-10 md:mt-10">
                <h2 className="job-count">
                  500<span>+</span>
                </h2>
                <p className="job-count-p">Job offers</p>
              </div>
              <div className="line mx-8 md:hidden"></div>
              <div className="jobs__sub-header pb-5 md:ml-10 md:mt-10">
                <h2 className="job-count">
                  100<span>+</span>
                </h2>
                <p className="job-count-p">Startups</p>
              </div>
            </div>
            <div className="jobs__offer__image hidden lg:block w-2/4">
              <img src={offer} alt="jobs" />
            </div>
          </div>
          <div className="jobs__list flex flex-col items-center">
            <div className="jobs__dsk absolute top-80 left-20">
              {jobData.map((job, index) => {
                const { id } = job;
                return (
                  <Job
                    key={id}
                    {...job}
                    darkmode={darkmode}
                    className={`hidden lg:block div${id}`}
                  />
                );
              })}
            </div>
            {jobInfo.jobData.slice(0, jobInfo.itemsToShow).map((job, index) => {
              const { id } = job;
              return (
                <Job
                  key={id}
                  {...job}
                  darkmode={darkmode}
                  className={"lg:hidden"}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <CustomButton className={""} onClick={handleExpand}>
            {jobInfo.expanded ? "See Less" : "See More"}
          </CustomButton>
        </div>
      </div>
      <div className="hidden lg:block mb-9 lg:mt-36 flex justify-center">
        <img src={signature} alt="signature" />
      </div>
      {/* <Job darkmode={darkmode} /> */}
    </section>
  );
};

export default Jobs;
