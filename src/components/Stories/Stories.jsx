import "./Stories.scss";

const Stories = ({ darkmode }) => {
  return (
    <section className={`stories ${darkmode ? "dark" : ""}`}>Stories</section>
  );
};

export default Stories;
