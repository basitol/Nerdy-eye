import { work, workdark, triangle } from "../../assets";
import "./Works.scss";

const Works = ({ darkmode }) => {
  return (
    <section className={`works ${darkmode ? "dark" : ""}`}>
      <div className="works__container py-12 px-9 md:pt-28">
        <div className="works__container__title">
          <h1>HOW IT WORKS</h1>
        </div>
        <div className="works__container__content">
          <div className="works__container__content__item">
            <div className="works__container__content__item__image">
              <img src={darkmode ? work : workdark} alt="work" />
              <div className="line hidden md:block"></div>
              <span className="num">1</span>
            </div>
            <div className="works__container__content__item__title">
              <h2>Title goes here</h2>
            </div>
            <div className="works__container__content__item__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                aliquet in lacus, duis sagittis. Eget elementum duis
              </p>
            </div>
          </div>
          <div className="works__container__content__item">
            <div className="works__container__content__item__image">
              <img
                src={triangle}
                alt="polygon"
                className="hidden md:absolute md:inline md:right-full"
              />
              <img src={work} alt="work2" />
              <span className="num">2</span>
              <div className="line hidden md:block"></div>
              <div className="line-2 hidden md:block"></div>
            </div>
            <div className="works__container__content__item__title">
              <h2>Title goes here</h2>
            </div>
            <div className="works__container__content__item__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                aliquet in lacus, duis sagittis. Eget elementum duis
              </p>
            </div>
          </div>
          <div className="works__container__content__item">
            <div className="works__container__content__item__image">
              <img
                src={triangle}
                alt="polygon"
                className="hidden md:absolute md:inline md:right-full"
              />
              <img src={work} alt="work3" />
              <div className="line-2 hidden md:block"></div>
              <span className="num">3</span>
            </div>

            <div className="works__container__content__item__title">
              <h2>Title goes here</h2>
            </div>
            <div className="works__container__content__item__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                aliquet in lacus, duis sagittis. Eget elementum duis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
