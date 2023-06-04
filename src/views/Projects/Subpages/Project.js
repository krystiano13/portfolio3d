import React from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { ViewProject } from "./ViewProject";

import "../../Wrapper.css";
import "../styles/Project.css";

const Project = ({
  triggerAnimation,
  arrayOfClasses,
  projectTitle,
  left,
  live,
  code,
}) => {
  const ProjectRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const idRef = React.useRef(0);
  const navigate = useNavigate();
  const [image, setImage] = React.useState(arrayOfClasses[0]);
  const [id, setId] = React.useState(0);
  const [view, setView] = React.useState(false);

  const arrayOfId = [0, 1, 2];

  React.useEffect(() => {
    idRef.current = id;
  }, [id]);

  React.useEffect(() => {
    gsap.set(ProjectRef.current, { x: left ? 500 : -500, autoAlpha: 0 });
    gsap.to(ProjectRef.current, { x: 0, autoAlpha: 1, duration: 0.75 });

    setInterval(() => {
      if (idRef.current !== 2) changeImage(idRef.current + 1);
      else changeImage(0);
    }, 7000);
  }, []);

  const disableView = () => setView(false);

  const changeImage = (id) => {
    setId(id);
    gsap.to(imageRef.current, { autoAlpha: 0, duration: 0.25 }).then(() => {
      setImage(arrayOfClasses[id]);
    });
    gsap.to(imageRef.current, { autoAlpha: 1, duration: 0.25, delay: 0.5 });
  };

  const goBack = () => {
    gsap.to(ProjectRef.current, {
      x: left ? 500 : -500,
      autoAlpha: 0,
      duration: 0.75,
    });
    setTimeout(() => triggerAnimation(2), 500);
    setTimeout(() => navigate("/portfolioLiveTest/technologies"), 750);
  };

  return (
    <main
      ref={ProjectRef}
      className={
        left === true ? "Project Wrapper left" : "Project Wrapper right"
      }
    >
      {view === true ? (
        <ViewProject live={live} code={code} disableView={disableView} />
      ) : (
        <section className="Project__content">
          <h1 className="Project__content__title">Selected Projects</h1>
          <h2 className="Project__content__subtitle">{projectTitle}</h2>
          <section className="Project__content__info">
            <div className="Project__content__info__buttons">
              <button
                onClick={goBack}
                className="Project__content__info__buttons__button"
              >
                Back
              </button>
              <button
                onClick={() => setView(true)}
                className="Project__content__info__buttons__button"
              >
                View Project
              </button>
              <button className="Project__content__info__buttons__button">
                Next
              </button>
            </div>
            <div className={`Project__content__info__screenShotViewer`}>
              <div ref={imageRef} className={`img ${image}`} />
              <div className="dots">
                {arrayOfId.map((item) => (
                  <section
                    key={item}
                    className={item === id ? "dot on" : "dot off"}
                    onClick={() => changeImage(item)}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>
      )}
      <section className="Project__waves">
        <div className="Project__waves__wave wave1"></div>
        <div className="Project__waves__wave wave2"></div>
        <div className="Project__waves__wave wave3"></div>
        <div className="Project__waves__wave wave4"></div>
      </section>
    </main>
  );
};

Project.propTypes = {
  triggerAnimation: PropTypes.func,
  arrayOfClasses: PropTypes.arrayOf(PropTypes.string),
  projectTitle: PropTypes.string,
  left: PropTypes.bool,
  live: PropTypes.string,
  code: PropTypes.string,
};

export default Project;
